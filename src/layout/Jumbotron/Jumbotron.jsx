import React, { useMemo } from 'react'
import '../../styles/Jumbotron.css'

import TalkWithUsButton from '../../common/TalkWithUsButton/TalkWithUsButton'
import Translator from '../../common/I18n/Translator'

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
                    <p className="headingLg mb-2 text-uppercase"><i><Translator path="home.jumbotron_heading" /></i></p>
                    <h1 className="headingXX text-uppercase mb-3">
                        <Translator path="home.jumbotron_subtitle" />
                    </h1>
                    <p className="textLg text-weight-light"><Translator path="home.jumbotron_text" /></p>
                </div>
                <TalkWithUsButton  rounded size="xl">Fale com nossos especialistas</TalkWithUsButton>
            </div>
        </section>
    )
}

export default Jumbotron