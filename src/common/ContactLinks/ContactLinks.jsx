import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { HashLink } from 'react-router-hash-link'

import './ContactLinks.css'

const ContactLinks = props => (
    <ul className="ContactLinks">
        <li>
            <a className="contactLink" href="https://api.whatsapp.com/send/?phone=557183531931&text=Preciso+de+um+atendimento.&type=phone_number&app_absent=0" target="_blank">
                <img src={`${process.env.PUBLIC_URL}/images/whatsapp.svg`} />
            </a>
        </li>
        <li>
            <HashLink smooth className="contactLink svgIcon" to="#contate_nos">
                <FontAwesomeIcon icon={faEnvelope} color="#fff" size="1x" />
            </HashLink>
        </li>
    </ul>
)

export default ContactLinks