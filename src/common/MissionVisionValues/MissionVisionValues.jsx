import React from 'react'
import HalfImageSection from '../HalfImageSection/HalfImageSection'
import TalkWithUsButton from '../TalkWithUsButton/TalkWithUsButton'
import Divider from '../Divider/Divider'
import './MissionVisionValues.css'

const MissionVisionValues = props => (
    <section className="MissionVisionValues">
        <HalfImageSection
            img={`${process.env.PUBLIC_URL}/images/detetizador_estufa.jpg`}
            imgGrayscale>
                <div className="defaultLeftContentHorizontalPadding mt-5">
                <p className="textLg c-text mb-3">
                    Somos uma empresa que se propõe a oferecer melhor qualidade em todos os nossos serviços, valorizando e respeitando nossa equipe, garantindo bem estar e segurança para todos.
                </p>
                <p className="textLg c-text mb-5">
                    Esse é o nosso propósito como empresa, que acredita em todos que fazem parte diretamente ou indiretamente da Starpro. Segurança e Saúde Ambiental começa por aqui!
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
                        <h3 className="headingLg c-white mb-3">Missão</h3>
                        <p className="c-white">Prestar serviços de qualidade e segurança, proporcionando satisfação dos nossos clientes e o desenvolvimento sustentável.</p>
                    </div>
                    <div className="mission col-md-12 col-lg-4">
                        <h3 className="headingLg c-white mb-3">Visão</h3>
                        <p className="c-white">Ser referência na prestação de serviços, promovendo o desenvolvimento continuo dos processos, beneficiando a todos.</p>
                    </div>
                    <div className="mission col-md-12 col-lg-4">
                        <h3 className="headingLg c-white mb-3">Valores</h3>
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