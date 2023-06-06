import React from 'react'
import { useCallback } from 'react'
import Slider from 'react-slick'
import Translator from '../I18n/Translator'

import './OurCustomers.css'

const customers = [
    {
        img: `${process.env.PUBLIC_URL}/images/cliente-14-300x300.jpeg`,
        title: 'Amoedo'
    },
    {
        img: `${process.env.PUBLIC_URL}/images/cliente_Prancheta-1-300x300.jpeg`,
        title: 'Câmara Municipal de Salvador'
    },
    {
        img: `${process.env.PUBLIC_URL}/images/cliente-02-300x300.jpeg`,
        title: 'Câmara Municipal de Camaçari'
    },
    {
        img: `${process.env.PUBLIC_URL}/images/cliente-04-300x300.jpeg`,
        title: 'Mundo Plaza'
    },
    {
        img: `${process.env.PUBLIC_URL}/images/cliente-05-300x300.jpeg`,
        title: 'Copagaz'
    },
    {
        img: `${process.env.PUBLIC_URL}/images/cliente-06-300x300.jpeg`,
        title: 'IPERBA'
    },
    {
        img: `${process.env.PUBLIC_URL}/images/cliente-07-300x300.jpeg`,
        title: 'Narciso Enxovais'
    },
    
    {
        img: `${process.env.PUBLIC_URL}/images/cliente-08-300x300.jpeg`,
        title: 'SEMO'
    },
    {
        img: `${process.env.PUBLIC_URL}/images/cliente-09-300x300.jpeg`,
        title: 'Sempre Odonto'
    },
    {
        img: `${process.env.PUBLIC_URL}/images/cliente-10-300x300.jpeg`,
        title: 'Logic'
    },
    {
        img: `${process.env.PUBLIC_URL}/images/cliente-12-300x300.jpeg`,
        title: 'Faculdade Dom Pedro II'
    },
    {
        img: `${process.env.PUBLIC_URL}/images/cliente-13-300x300.jpeg`,
        title: 'EVO'
    },
    {
        img: `${process.env.PUBLIC_URL}/images/colegio-portinari.jpg`,
        title: 'Colégio Portinari'
    },
    {
        img: `${process.env.PUBLIC_URL}/images/oliva-gourmet.jpg`,
        title: 'Oliva Gourmet'
    },
    {
        img: `${process.env.PUBLIC_URL}/images/continental.jpg`,
        title: 'Continental'
    },
    {
        img: `${process.env.PUBLIC_URL}/images/tenda.jpg`,
        title: 'Tenda'
    },
    {
        img: `${process.env.PUBLIC_URL}/images/boulevard-side.jpg`,
        title: 'Boulevard Side Empresarial'
    },
    {
        img: `${process.env.PUBLIC_URL}/images/capelinha.jpg`,
        title: 'Capelinha'
    },
    {
        img: `${process.env.PUBLIC_URL}/images/hotel-dan-inn.jpg`,
        title: 'Hotel Dan Inn'
    },
    {
        img: `${process.env.PUBLIC_URL}/images/dom-pedrinho.jpg`,
        title: 'Dom Pedrinho'
    },
    {
        img: `${process.env.PUBLIC_URL}/images/auto-norte.jpg`,
        title: 'Auto Norte Distribuidora de Peças'
    },
    {
        img: `${process.env.PUBLIC_URL}/images/azul-cargo.jpg`,
        title: 'Azul Cargo'
    },
    {
        img: `${process.env.PUBLIC_URL}/images/hotel-salvador-mar.jpg`,
        title: 'Salvador Mar Hotel'
    },
    {
        img: `${process.env.PUBLIC_URL}/images/colegio-guadalupe.jpg`,
        title: 'Colégio Guadalupe'
    },
    {
        img: `${process.env.PUBLIC_URL}/images/edf-fundacao-politecnica.jpg`,
        title: 'Condomínio Edf. Fundação Politécnica'
    },
    {
        img: `${process.env.PUBLIC_URL}/images/centerparts-distribuidora.jpg`,
        title: 'Centerparts Distribuidora'
    },
]

const OurCustomers = props => {
    const renderCustomer = useCallback((c, i) => (
        <img key={`brand${i}`} src={c.img} alt={c.title} />
    ), [])

    const settings = {
        arrows: false,
        dots: false,
        slidesToScroll: 1,
        slidesToShow: 5,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 500,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 3
                }
            }
        ]
    }

    return (
        <section className="OurCustomers">
            <div className="container">
                <div className="row">
                    <div className="heading col-md-12  col-lg-4 d-flex flex-row align-items-center">
                        <h1 className="headingXl c-primary">
                            <Translator path="our_customers.heading" />
                        </h1>
                    </div>
                    <div className="col-md-12 col-lg-8">
                        <Slider
                            { ... settings }>
                            { customers.map(renderCustomer) }
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurCustomers