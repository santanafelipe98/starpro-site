import React from 'react'
import { useCallback } from 'react'
import './OurCustomers.css'

const customers = [
    {
        img: `${process.env.PUBLIC_URL}/images/amoedo.png`,
        title: 'Amoedo'
    },
    {
        img: `${process.env.PUBLIC_URL}/images/camara_municipal.png`,
        title: 'Câmara Municipal de Salvador'
    },
    {
        img: `${process.env.PUBLIC_URL}/images/camara_camacari.png`,
        title: 'Câmara Municipal de Camaçari'
    },
    {
        img: `${process.env.PUBLIC_URL}/images/escola_concept.png`,
        title: 'Escola Concept'
    },
    {
        img: `${process.env.PUBLIC_URL}/images/mundo_plaza.jpg`,
        title: 'Mundo Plaza'
    },
]

const OurCustomers = props => {
    const renderCustomer = useCallback((c, i) => (
        <div key={`brand${i}`} className="brand">
            <img src={c.img} alt={c.title} />
        </div>
    ), [])

    return (
        <section className="OurCustomers">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 d-flex flex-row align-items-center">
                        <h1 className="headingXl c-primary">
                            Os clientes que confiam na Starpro
                        </h1>
                    </div>
                    <div className="col-lg-8">
                        <div className="brands">
                            { customers.map(renderCustomer) }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurCustomers