import React, { useMemo } from 'react'
import './PageHeader.css'

const PageHeader = props => {
    const styles = useMemo(() => ({
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/page-header-bg.png)`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '105% 50%',
        backgroundSize: '60%'
    }), [])

    return (
        <section style={styles} className="PageHeader">
            {  props.children }
        </section>
    )
}

export default PageHeader