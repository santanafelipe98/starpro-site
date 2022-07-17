import React, { useCallback, useState } from 'react'
import '../../styles/Header.css'
import PropTypes from 'prop-types'

import ButtonLink from '../../common/ButtonLink/ButtonLink'

import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import NavItem from './NavItem'
import ContactLinks from '../../common/ContactLinks/ContactLinks'

import { useScroll } from '../../hooks/useScroll'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { usePrevious } from '../../hooks/usePrevious'
import HamburguerButton from '../../common/HamburguerButton/HamburguerButton'
import SideNav from './SideNav'
import SideNavItem from './SideNavItem'
import { useResize } from '../../hooks/useResize'

function sanitizeUrl(url) {
    return url.replace(/[/#]/g, '')
}

const Header = props => {
    const location                        = useLocation()
    const { y:scrollY }                   = useScroll()
    const { width:innerWidth }            = useResize()
    const previousY                       = usePrevious(scrollY)
    const [ visible, setVisible ] = useState(true)
    const [ showSideNav, setShowSideNav ] = useState(false)
    
    // Trata barra de rolagem

    useEffect(() => {
        const MIN_Y = 100

        if (scrollY > MIN_Y) {
            if (scrollY >= previousY) {
                setVisible(false)
            } else {
                setVisible(true)
            }
        } else {
            setVisible(true)
        }
    }, [scrollY, setVisible])

    // Trata redimensionamento da janela

    useEffect(() => {
        const BREAKPOINT = 1199.8
        
        if (innerWidth >= BREAKPOINT)
            setShowSideNav(false)
    }, [innerWidth, setShowSideNav])

    const [ items ] = useState([
        {
            title: "Home",
            url: "/"
        },
        {
            title: "Segmentos",
            url: "/#nossos_servicos",
            hash: true
        },
        {
            title: "Serviços",
            url: "#0",
            items: [
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
            ]
        },
        {
            title: "A Starpro",
            url: 'a-starpro'
        },
        {
            title: 'Contato',
            url: '#contate_nos',
            hash: true
        }
    ])

    const renderItem = useCallback((item, i) => {
        const sanitizedUrl     = sanitizeUrl(item.url)
        const santizedLocation = sanitizeUrl(location.pathname)
        const activeIndex      = (item.items || []).findIndex(val => {
            let sanitizedSubitemUrl = sanitizeUrl(val.url)

            return sanitizedSubitemUrl === santizedLocation
        })

        return (
            <NavItem
                key={`navItem${i}`}
                {...item}
                active={ sanitizedUrl === santizedLocation }
                activeIndex={activeIndex} />
        )
    }, [location.pathname])

    const renderSideNavItem = useCallback((item, i) => {
        const sanitizedUrl     = sanitizeUrl(item.url)
        const santizedLocation = sanitizeUrl(location.pathname)
        const activeIndex      = (item.items || []).findIndex(val => {
            let sanitizedSubitemUrl = sanitizeUrl(val.url)

            return sanitizedSubitemUrl === santizedLocation
        })

        return (
            <SideNavItem
                key={`navItem${i}`}
                {...item}
                active={ sanitizedUrl === santizedLocation }
                activeIndex={activeIndex}
                onClick={() => setShowSideNav(false)} />
        )
    }, [location.pathname])

    return (
        <header className={`Header ${props.fixed ? 'fixed' : ''} ${!visible ? 'headerHidden' : '' }`}>
            <div className="container">
                <Link className="brand" to="/">
                    <img src={`${process.env.PUBLIC_URL}/images/logotipo_colorido.png`} alt="Logotipo Colorido Starpro" />
                </Link>
                <div className="navbar">
                    <Navbar id="menu">
                        { items.map(renderItem) }
                    </Navbar>
                    <ButtonLink className="btnLogin mr-4">Área do cliente</ButtonLink>
                    <ContactLinks />
                    <HamburguerButton
                        className="ml-3"
                        open={showSideNav}
                        onClick={() => setShowSideNav(val => !val)} />
                </div>
            </div>
            <SideNav visible={showSideNav}>
                { items.map(renderSideNavItem) }
            </SideNav>
        </header>
    )
}

Header.propTypes = {
    fixed: PropTypes.bool,

}

export default Header