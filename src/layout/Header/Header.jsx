import React from 'react'
import '../../styles/Header.css'
import Button from '../../common/Button/Button'

import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import NavItem from './NavItem'
import { useLocation } from 'react-router-dom'

/*
<nav className="navbarNav">
                    <Link to="/" className="navbarNavLink active">Home</Link>
                    <Link to="#" className="navbarNavLink">Segmentos</Link>
                    <Link to="#" className="navbarNavLink">Serviços</Link>
                    <Link to="/a-starpro" className="navbarNavLink">A Starpro</Link>
                    <HashLink to="#contate_nos" smooth className="navbarNavLink">Contato</HashLink>
                </nav>
*/

const Header = props => {
    const location = useLocation()
    console.log()

    return (
        <header className="Header">
            <div className="container">
                <Link className="brand" to="/">
                    <img src={`${process.env.PUBLIC_URL}/images/logotipo_colorido.png`} alt="Logotipo Colorido Starpro" />
                </Link>
                <div className="navbar">
                    <Navbar>
                        <NavItem
                            title="Home"
                            url="/" />
                        <NavItem
                            title="Segmentos"
                            url="#" />
                        <NavItem
                            title="Serviços"
                            url="#"
                            items={[
                                {
                                    title: 'Tratamento Fitossanitário',
                                    url: 'servicos/tratamento-fitossanitario'
                                },
                                {
                                    title: 'Controle de Pragas Urbanas',
                                    url: 'servicos/controle-de-pragas-urbanas'
                                },
                                {
                                    title: 'Limpeza e Desinfecção de Caixa D\'água',
                                    url: 'servicos/limpeza-e-desinfeccao-de-caixa-dagua'
                                },
                                {
                                    title: 'Sanitização de Ambientes',
                                    url: 'servicos/sanitizacao-de-ambientes'
                                },
                                {
                                    title: 'Saneamento Vegetal',
                                    url: 'servicos/saneamento-vegetal'
                                }
                            ]} />
                        <NavItem
                            title="A Starpro"
                            url="a-starpro" />
                    </Navbar>
                    <Button className="btnLogin">Área do cliente</Button>
                </div>
            </div>
        </header>
    )
}

export default Header