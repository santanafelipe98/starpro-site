import React from 'react'
import './Navbar.css'


const Navbar = props => (
    <nav {...props} className="NavbarNav">
        <ul className="navItems">
            { props.children } 
        </ul>
    </nav>
)

export default Navbar