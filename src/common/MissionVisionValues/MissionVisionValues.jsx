import React from 'react'
import HalfImageSection from '../HalfImageSection/HalfImageSection'
import TalkWithUsButton from '../TalkWithUsButton/TalkWithUsButton'
import Divider from '../Divider/Divider'
import './MissionVisionValues.css'
import Translator from '../I18n/Translator'

const MissionVisionValues = props => (
    <section className="MissionVisionValues">
        <HalfImageSection
            img={`${process.env.PUBLIC_URL}/images/detetizador_estufa.jpg`}
            imgGrayscale>
                <div className="defaultLeftContentHorizontalPadding mt-5">
                <p className="textLg c-text mb-3">
                    <Translator path="about_starpro.first_section_first_paragraph" />
                </p>
                <p className="textLg c-text mb-5">
                    <Translator path="about_starpro.first_section_seconcd_paragraph" />
                </p>
                <div className="btnDiv">
                    <TalkWithUsButton className="mt-3 mb-5" size="lg">Fale com nossos especialistas</TalkWithUsButton>
                    <Divider className="mb-5" style={{ width: '150px', marginLeft: '-120px', height: '2px' }} />
                </div>
                
            </div>
        </HalfImageSection>
        <div className="bg-primary">
            <div className="container bg-primary">
                <div className="row missionRow">
                    <div className="mission col-md-12 col-lg-4">
                        <h3 className="headingLg c-white mb-3">
                            <Translator path="mission_vision_values.mission_title" />
                        </h3>
                        <p className="c-white"><Translator path="mission_vision_values.mission_text" /></p>
                    </div>
                    <div className="mission col-md-12 col-lg-4">
                        <h3 className="headingLg c-white mb-3"><Translator path="mission_vision_values.vision_title" /></h3>
                        <p className="c-white">
                            <Translator path="mission_vision_values.vision_text" />
                        </p>
                    </div>
                    <div className="mission col-md-12 col-lg-4">
                        <h3 className="headingLg c-white mb-3"><Translator path="mission_vision_values.values_title" /></h3>
                        <ul className="textLg values c-white">
                            <li>Qualidade no atendimento</li>
                            <li>Credibilidade</li>
                            <li>Organização</li>
                            <li>Pontualidade</li>
                            <li>Respeito ao meio ambiente</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        
    </section>
)

export default MissionVisionValues