import React from 'react'
import '../../styles/Header.css'
import Button from '../../common/Button/Button'

import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

const Header = props => (
    <header className="Header">
        <div className="container">
            <Link className="brand" to="/">
                <img src={`${process.env.PUBLIC_URL}/images/logotipo_colorido.png`} alt="Logotipo Colorido Starpro" />
            </Link>
            <div className="navbar">
                <nav className="navbarNav">
                    <Link to="/" className="navbarNavLink active">Home</Link>
                    <Link to="#" className="navbarNavLink">Segmentos</Link>
                    <Link to="#" className="navbarNavLink">Serviços</Link>
                    <Link to="/a-starpro" className="navbarNavLink">A Starpro</Link>
                    <HashLink to="#contate_nos" smooth className="navbarNavLink">Contato</HashLink>
                </nav>
                <Button className="btnLogin">Área do cliente</Button>
            </div>
        </div>
    </header>
)

export default Header