import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { HashLink } from 'react-router-hash-link'

import './ContactLinks.css'

const ContactLinks = props => (
    <ul className="ContactLinks">
        <li className="whatsapp">
            <a className="contactLink" href="https://api.whatsapp.com/send/?phone=557135081814&text=Preciso+de+um+atendimento.&type=phone_number&app_absent=0" target="_blank">
                <img src={`${process.env.PUBLIC_URL}/images/whatsapp.svg`} />
            </a>
        </li>
        <li>
            <a smooth className="contactLink svgIcon" href="https://api.whatsapp.com/send/?phone=557135081814&text=Preciso+de+um+atendimento.&type=phone_number&app_absent=0" target="_blank">
                <FontAwesomeIcon icon={faEnvelope} color="#fff" size="1x" />
            </a>
        </li>
    </ul>
)

export default ContactLinks