import React, { useMemo } from 'react'
import './ContactUs.css'

import ContactForm from '../ContactForm'
import { useResize } from '../../hooks/useResize'
import { useCallback } from 'react'

const ContactUs = props => {
    const { width:innerWidth } = useResize()

    const styles = useMemo(() => {
        const BREAKPOINT = 992

        if (innerWidth <= BREAKPOINT) {
            return null
        } else {
            return {
                backgroundImage: `linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 50%, rgba(255,255,255,1) 100%), url(${process.env.PUBLIC_URL}/images/detetizador_sorrindo.jpg)`,
                backgroundRepeat: 'no-repeat'
            }
        }

        
    }, [innerWidth])

    return (
        <section id="contate_nos" className="ContactUs">
            <div style={styles} className="container">
                <div className="row">
                    <div className="col-lg-6 col-xl-7"></div>
                    <div className="col-lg-6 col-xl-5">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactUs