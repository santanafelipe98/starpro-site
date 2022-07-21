import React, { useMemo } from 'react'
import '../../styles/Jumbotron.css'

import TalkWithUsButton from '../../common/TalkWithUsButton/TalkWithUsButton'

const Jumbotron = props => {
    const styles = useMemo(() => ({
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/banner-home.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }), [])

    return (
        <section style={styles} className="Jumbotron">
            <div className="container d-flex flex-col align-items-center">
                <div className="serviceText d-flex flex-col align-items-center c-white text-center p-5">
                    <p className="headingLg mb-2 text-uppercase"><i>A Starpro é especialista em</i></p>
                    <h1 className="headingXX text-uppercase mb-3">
                        Controle de Pragas Urbanas
                    </h1>
                    <p className="textLg text-weight-light">Uma empresa líder de mercado, especializada na prestação de serviços em Controle de Pragas Urbana, Higienização de Caixa D'água, Sanitização de Ambientes e Saneamento Vegetal.</p>
                </div>
                <TalkWithUsButton  rounded size="xl">Fale com nossos especialistas</TalkWithUsButton>
            </div>
        </section>
    )
}

export default Jumbotron