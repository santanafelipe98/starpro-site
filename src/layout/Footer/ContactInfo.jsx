import React from 'react'
import '../../styles/ContactInfo.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ContactInfo = props => (
    <div className="ContactInfo">
        <ul>
            <li>
                <FontAwesomeIcon icon={['far', 'envelope']} size="lg" color="var(--primary-color)" />
                <span className="info">
                    <a href="mailto:comercial@starproambiental.com.br">comercial@starproambiental.com.br</a>
                </span>
            </li>
        </ul>
    </div>
)

export default ContactInfo