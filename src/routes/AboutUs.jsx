import React from 'react'

import '../styles/AboutUs.css'

import PageHeader from '../common/PageHeader/PageHeader'
import CallToActionBanner from '../common/CallToActionBanner/CallToActionBanner'
import ContactUs from '../common/ContactUs/ContactUs'
import InternationalCertification from '../common/InternationalCertification/InternationalCertification'
import MissionVisionValues from '../common/MissionVisionValues/MissionVisionValues'
import Thumbnail from '../common/Thumbnail/Thumbnail'
import GoToTop from '../common/GoToTop/GoToTop'
import TalkWithUsButton from '../common/TalkWithUsButton/TalkWithUsButton'

const AboutUs = props => (
    <main className="AboutUs">
        <PageHeader>
            <div className="pageHeaderContent">
                <div className="left">
                    <h1 className="pageHeaderTitle c-primary text-uppercase mb-5">
                        Conheça a Starpro
                    </h1>
                    <p className="pageHeaderText mt-3">
                        A Starpro é reconhecida no mercado pelo seu alto padrão de qualidade.
                    </p>

                    <TalkWithUsButton className="pageHeaderButton mt-4">Fale com nossos especialistas</TalkWithUsButton>
                </div>
                <div className="right">
                    <Thumbnail
                        img={`${process.env.PUBLIC_URL}/images/detetizador_sorrindo.jpg`}
                        alt="Detetizador sorrindo"
                        width="650px"
                        height="450px" />
                </div>
            </div>
        </PageHeader>
        <MissionVisionValues />
        <InternationalCertification />
        <ContactUs />
        <CallToActionBanner>
            <h1 className="headingLg mb-3 text-weight-light text-uppercase">Tratamento térmico é com a Starpro</h1>
            <h2 className="headingMd">Estamos prontos para lhe atender</h2>
        </CallToActionBanner>
        <GoToTop />
    </main>
)

export default AboutUs