import React from 'react'
import ButtonLink from '../ButtonLink/ButtonLink'
import './KnowUs.css'

const KnowUs = props => (
    <section className="KnowUs">
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-lg-6 video d-flex align-items-center">
                    <div className="videoPlaceholder">
                        <img src={`${process.env.PUBLIC_URL}/images/video_placeholder.jpg`} alt="Vídeo Placeholder" />
                        <img className="videoThumb" src={`${process.env.PUBLIC_URL}/images/play-button.png`} alt="Vídeo Thumb" />
                    </div>
                </div>
                <div className="col-sm-12 col-lg-6">
                    <h2 className="headingLg c-primary">Conheça a Starpro</h2>
                    <p className="text">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                    </p>
                    

                    <div className="buttonWrapper">
                        <ButtonLink to="https://api.whatsapp.com/send/?phone=557183531931&text=Preciso+de+um+atendimento.&type=phone_number&app_absent=0" className="mt-5 btnCallToAction" variant="primary">
                            Fale com nossos especialistas
                        </ButtonLink>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default KnowUs