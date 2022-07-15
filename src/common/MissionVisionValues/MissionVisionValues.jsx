import React from 'react'
import ButtonLink from '../ButtonLink/ButtonLink'
import './MissionVisionValues.css'

const MissionVisionValues = props => (
    <section className="MissionVisionValues">
        <div className="textImage">
            <div className="text">
                <p>
                    Somos uma empresa que se propõe a oferecer melhor qualidade em todos os nossos serviços, valorizando e respeitando nossa equipe, garantindo bem estar e segurança para todos.
                </p>
                <p>
                    Esse é o nosso propósito como empresa, que acredita em todos que fazem parte diretamente ou indiretamente da Starpro. Segurança e Saúde Ambiental começa por aqui!
                </p>

                <ButtonLink to="#contate_nos" hash className="mt-3" size="lg">Fale com nossos especialistas</ButtonLink>

                <div className="sideDivider"></div>
            </div>
            <div className="image">
                <img src={`${process.env.PUBLIC_URL}/images/detetizador_estufa.jpg`} alt="Detetizador em uma estufa olhando para camêra" />
            </div>
        </div>
        <div className="bg-primary">
            <div className="container bg-primary">
                <div className="row missionRow">
                    <div className="col-md-4">
                        <h3 className="headingLg c-white mb-5">Missão</h3>
                        <p className="c-white">Prestar serviços de qualidade e segurança, proporcionando satisfação dos nossos clientes e o desenvolvimento sustentável.</p>
                    </div>
                    <div className="col-md-4">
                        <h3 className="headingLg c-white mb-5">Visão</h3>
                        <p className="c-white">Ser referência na prestação de serviços, promovendo o desenvolvimento continuo dos processos, beneficiando a todos.</p>
                    </div>
                    <div className="col-md-4">
                        <h3 className="headingLg c-white mb-5">Valores</h3>
                        <p className="c-white">
                            <ul className="values">
                                <li>Qualidade no atendimento</li>
                                <li>Credibilidade</li>
                                <li>Organização</li>
                                <li>Pontualidade</li>
                                <li>Respeito ao meio ambiente</li>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        
    </section>
)

export default MissionVisionValues