import React, { useCallback, useMemo } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

import './NavItem.css'

const NavItem = props => {
    const items = useMemo(() => props.items || [], [props.items])

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
                                className="ml-2"
                                icon={faCaretDown}
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
                            className="ml-2"
                            icon={faCaretDown}
                            size="sm"
                            color="var(--primary-color)" />
                    )
                }
            </Link>
        )
    }, [props.hash, props.title, props.url, items])

    return (
        <li className={`NavItem ${props.active ? 'active' : ''}`}>
            { renderLink() }
            {
                items.length > 0 &&
                (
                    <ul className="dropdownMenu">
                        { items.map((item, i) => <NavItem active={props.activeIndex === i} key={`${item.title}${i}`} {...item} />) }
                    </ul>
                )
            }
        </li>
    )
}

NavItem.propTypes = {
    url: PropTypes.string,
    title: PropTypes.string,
    active: PropTypes.bool,
    activeIndex: PropTypes.number,
    items: PropTypes.arrayOf(PropTypes.shape({
        url: PropTypes.string,
        title: PropTypes.string
    })),
    hash: PropTypes.bool,
}



export default NavItem