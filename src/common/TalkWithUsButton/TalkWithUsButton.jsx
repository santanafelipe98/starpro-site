import React from 'react'
import ButtonLink from '../ButtonLink/ButtonLink'
import Translator from '../I18n/Translator'

const TalkWithUsButton = props => (
    <ButtonLink {...props} anchor target="_blank" to="https://api.whatsapp.com/send/?phone=557135091814&text=Preciso+de+um+atendimento.&type=phone_number&app_absent=0" size="lg">
        <Translator path="buttons.talk_to_us" />
    </ButtonLink>
)

export default TalkWithUsButton