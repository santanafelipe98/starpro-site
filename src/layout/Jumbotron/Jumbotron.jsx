import React, { useMemo } from 'react'
import '../../styles/Jumbotron.css'

import ButtonLink from '../../common/ButtonLink/ButtonLink'
import Slider from 'react-slick'


const Jumbotron = props => {
    const styles = useMemo(() => ({
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/banner-home.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }), [])
    
    const settings = useMemo(() => ({
        className: "slider center variable-width",
        arrows: true,
        dots: false,
        slidesToShow: 1,
        slidesToShow: 1,
        speed: 500,
        infinite: true,
        variableWidth: true,
    }), [])

    return (
        <section style={styles} className="Jumbotron">
            <div className="container d-flex flex-col align-items-center">
                <Slider className="carousel" {...settings}>
                    <div className="serviceText c-white text-center p-5">
                        <p className="headingLg mb-2 text-uppercase"><i>A Starpro é especialista em</i></p>
                        <h1 className="headingXX text-uppercase mb-3">
                            Controle de Pragas Urbanas
                        </h1>
                        <p className="textLg text-weight-light">Uma empresa líder de mercado, especializada na prestação de serviços em Controle de Pragas Urbana, Higienização de Caixa D'água, Sanitização de Ambientes e Saneamento Vegetal</p>
                    </div>
                </Slider>
                <ButtonLink to="#contate_nos" hash size="xl">Fale com nossos especialistas</ButtonLink>
            </div>
        </section>
    )
}

export default Jumbotron