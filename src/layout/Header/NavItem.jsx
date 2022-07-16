import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

import './NavItem.css'

const NavItem = props => {
    const items = props.items || []

    return (
        <li className={`NavItem ${props.active || ''}`}>
            <Link to={props.url} className="navLink">
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
            {
                items.length > 0 &&
                (
                    <ul className="dropdownMenu">
                        { items.map((item, i) => <NavItem key={`${item.title}${i}`} {...item} />) }
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
    items: PropTypes.arrayOf(PropTypes.shape({
        url: PropTypes.string,
        title: PropTypes.string
    }))
}



export default NavItem