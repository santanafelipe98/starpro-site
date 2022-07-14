import React, { useMemo } from 'react'
import './ContactUs.css'

import ContactForm from '../ContactForm'

const ContactUs = props => {
    const styles = useMemo(() => ({
        backgroundImage: `linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 50%, rgba(255,255,255,1) 100%), url(${process.env.PUBLIC_URL}/images/detetizador_sorrindo.jpg)`,
        backgroundRepeat: 'no-repeat'
    }), [])

    return (
        <section className="ContactUs">
            <div style={styles} className="container">
                <div className="row">
                    <div className="col-md-7"></div>
                    <div className="col-md-5">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactUs