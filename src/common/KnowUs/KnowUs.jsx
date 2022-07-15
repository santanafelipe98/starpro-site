import React from 'react'
import ButtonLink from '../ButtonLink/ButtonLink'
import './KnowUs.css'

const KnowUs = props => (
    <section className="KnowUs">
        <div className="container">
            <div className="row">
                <div className="col-md-6 video d-flex align-items-center">
                    <div className="videoPlaceholder">
                        <img src={`${process.env.PUBLIC_URL}/images/video_placeholder.jpg`} alt="Vídeo Placeholder" />
                        <img className="videoThumb" src={`${process.env.PUBLIC_URL}/images/play-button.png`} alt="Vídeo Thumb" />
                    </div>
                </div>
                <div className="col-md-6">
                    <h2 className="headingLg c-primary">Conheça a Starpro</h2>
                    <p className="text">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                    </p>

                    <ButtonLink to="#contate_nos" hash className="mt-5" variant="primary">
                        Fale com nossos especialistas
                    </ButtonLink>
                </div>
            </div>
        </div>
    </section>
)

export default KnowUs