import React from 'react'
import '../../styles/Header.css'
import ButtonLink from '../../common/ButtonLink/ButtonLink'

import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import NavItem from './NavItem'
import ContactLinks from '../../common/ContactLinks/ContactLinks'

import { useLocation } from 'react-router-dom'

const Header = props => {
    const location = useLocation()

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
                        <NavItem
                            title="Contato"
                            url="#contate_nos"
                            hash />
                    </Navbar>
                    <ButtonLink className="btnLogin mr-4">Área do cliente</ButtonLink>
                    <ContactLinks />
                </div>
            </div>
        </header>
    )
}

export default Header