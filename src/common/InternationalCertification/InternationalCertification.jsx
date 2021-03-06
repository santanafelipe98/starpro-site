import React from 'react'
import './InternationalCertification.css'

const InternationalCertification = props => (
    <section {...props} className={`${props.className || ''} InternationalCertification`}>
        <div className="container">
            <div className="row textRow">
                <div className="col-sm-12 col-lg-6 bg-primary left">
                    <div className="wrapper">
                        <h2 className="headingXl c-white text-right mb-3">Certificações internacionais</h2>
                        <p className="textXl c-white text-right">
                            Temos certificações como: ISO-9001 - GAFTA - FOSFA - NPMA.
                            Oferecemos segurança total do ínicio ao fim do processo nas documentações necessárias com relatórios de ação.
                        </p>
                    </div>
                </div>
                <div className="col-sm-12 col-lg-6 right d-flex align-items-center">
                    <div className="wrapper">
                        <p className="text-right headingLg">A Starpro é reconhecida pelo mercado pelo seu <span className="c-primary text-weight-bold">alto padrão de qualidade.</span></p>
                    </div>
                </div>
            </div>
            <div className="row certifications d-flex flex-row justify-content-center align-items-center">
                    <img className="certificationImage" src={`${process.env.PUBLIC_URL}/images/bureau_veritas.png`} alt="Certificação" />
                    <img className="certificationImage" src={`${process.env.PUBLIC_URL}/images/gafta_fumigator.png`} alt="Certificação" />
                    <img className="certificationImage" src={`${process.env.PUBLIC_URL}/images/fosfa_international.png`} alt="Certificação"  />
                    <img className="certificationImage" src={`${process.env.PUBLIC_URL}/images/npma.png`} alt="Certificação"  />
            </div>
        </div>
    </section>
)

export default InternationalCertification