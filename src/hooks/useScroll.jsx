import { useEffect, useState } from 'react'

export function useScroll () {
    const [ x, setX ] = useState(0)
    const [ y, setY ] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            setX(window.scrollX)
            setY(window.scrollY)
        }

        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [setX, setY])

    return { x, y }
}