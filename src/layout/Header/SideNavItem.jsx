import React, { useCallback, useState, useMemo } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCaretRight } from '@fortawesome/free-solid-svg-icons'

import './SideNavItem.css'

const SideNavItem = props => {
    const items = useMemo(() => props.items || [], [props.items])
    const [ open, setOpen ] = useState(false)

    const handleClick = useCallback((e) => {
        setOpen(val => !val)

        if (props.onClick && items.length === 0)
            props.onClick(e)
    }, [setOpen, props.onClick, items])

    const renderLink = useCallback(() => {
        if (props.anchor) {
            return (
                <a href={props.url} target={props.target} className="navLink">{props.title}</a>
            )
        }

        if (props.hash) {
            return (
                <HashLink smooth to={props.url} className={`navLink`}>
                    { props.title }
                    {
                        items.length > 0 &&
                        (
                            <FontAwesomeIcon
                                className="caret"
                                icon={open ? faCaretDown : faCaretRight}
                                size="sm"
                                color="var(--primary-color)" />
                        )
                    }
                </HashLink>
            )
        }

        return (
            <Link to={props.url} className={`navLink`}>
                { props.title }
                {
                    items.length > 0 &&
                    (
                        <FontAwesomeIcon
                            className="caret"
                            icon={open ? faCaretDown : faCaretRight}
                            size="sm"
                            color="var(--primary-color)" />
                    )
                }
            </Link>
        )
    }, [props.hash, props.url, props.title, open, items])

    return (
        <li
            onClick={handleClick}
            className={`SideNavItem ${props.active ? 'active' : ''} ${open && items.length > 0 ? 'open' : ''}`}>
            { renderLink() }
            {
                items.length > 0 &&
                (
                    <ul className="dropdownMenu">
                        { items.map((item, i) => <SideNavItem onClick={props.onClick} active={props.activeIndex === i} key={`${item.title}${i}`} {...item} />) }
                    </ul>
                )
            }
        </li>
    )
}

SideNavItem.propTypes = {
    url: PropTypes.string,
    title: PropTypes.string,
    active: PropTypes.bool,
    activeIndex: PropTypes.number,
    items: PropTypes.arrayOf(PropTypes.shape({
        url: PropTypes.string,
        title: PropTypes.string
    })),
    hash: PropTypes.bool,
    onClick: PropTypes.func
}



export default SideNavItem