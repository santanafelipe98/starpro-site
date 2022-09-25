import React, { useMemo } from 'react'
import './ContactUs.css'

import {
    sendMessage
} from '../../actions/contactActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import ContactForm from '../ContactForm'
import { useResize } from '../../hooks/useResize'
import Alert from '../Alert/Alert'
import Translator from '../I18n/Translator'

const ContactUs = props => {
    const { sendMessage, contact: { errors, status } } = props
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
                        {
                            errors.length > 0
                                ? <Alert variant="danger" className="mb-2">{ errors[0] }</Alert>
                                : null
                        }

                        {
                            status === 'DONE'
                                && <Alert variant="success" className="mb-2"><Translator path="contact_form.message_sent" /></Alert>
                        }
                        <ContactForm
                            onSubmit={sendMessage} />
                    </div>
                </div>
            </div>
        </section>
    )
}

const mapStateToProps = state => ({
    contact: state.contact
})

const mapDispatchToProps = dispatch => bindActionCreators({
    sendMessage
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ContactUs)