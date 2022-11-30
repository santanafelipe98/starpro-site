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
import { sanitizeUrl } from '../../utils/UrlUtils'
import I18n from '../../common/I18n/I18n'
import Translator from '../../common/I18n/Translator'

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
            title: <Translator path="header.home" />,
            url: "/"
        },
        {
            title: <Translator path="header.services" />,
            url: "#0",
            items: [
                {
                    title: <Translator path="services.phytosanitary_treatment_card_title" />,
                    url: 'servicos/tratamento-fitossanitario'
                },
                {
                    title: <Translator path="services.urban_pest_control_card_title" />,
                    url: 'servicos/controle-de-pragas-urbanas'
                },
                {
                    title: <Translator path="services.water_tank_cleaning_and_disinfection_card_title" />,
                    url: 'servicos/limpeza-e-desinfeccao-de-caixa-dagua'
                },
                {
                    title: <Translator path="services.sanitization_of_environments_card_title" />,
                    url: 'servicos/sanitizacao-de-ambientes'
                },
                {
                    title: <Translator path="services.plant_sanitation_card_title" />,
                    url: 'servicos/paisagismo'
                }
            ]
        },
        {
            title: <Translator path="header.starpro" />,
            url: 'a-starpro'
        },
        {
            title: <Translator path="header.contact" />,
            url: '#contate_nos',
            hash: true,
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
                    <ButtonLink className="btnLogin mr-4" to="http://members.starproambiental.com.br/" anchor target="_blank">
                        <Translator path="buttons.customers_area" />
                    </ButtonLink>
                    <ContactLinks />
                    <I18n />
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