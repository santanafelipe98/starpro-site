import React from 'react'
import ButtonLink from '../ButtonLink/ButtonLink'

const TalkWithUsButton = props => (
    <ButtonLink {...props} anchor target="_blank" to="https://api.whatsapp.com/send/?phone=557183531931&text=Preciso+de+um+atendimento.&type=phone_number&app_absent=0" size="lg">Fale com nossos especialistas</ButtonLink>
)

export default TalkWithUsButton