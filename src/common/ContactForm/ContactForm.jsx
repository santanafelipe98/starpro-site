import React from 'react'
import './ContactForm.css'

import Input from '../Input'
import Textarea from '../Textarea'
import Button from '../Button/Button'
import CustomSelect from '../CustomSelect/CustomSelect'
import normalizePhone from '../../utils/normalizePhone'
import Translator from '../I18n/Translator'
import { Field, reduxForm } from 'redux-form'
import { isPhone, isEmail, required } from '../../utils/formValidations'

let ContactForm = props => {
    const options = [
        {
            value: '',
            title: <Translator path="contact_form.select_quote_default_option" />
        },
        {
            value: 'TRATAMENTO_FITOSSANITARIO',
            title: <Translator path="services.phytosanitary_treatment_card_title" />,
        },
        {
            value: 'CONTROLE_DE_PRAGAS_URBANAS',
            title: <Translator path="services.urban_pest_control_card_title" />
        },
        {
            value: 'LIMPEZA_E_DESINFECCAO_DE_CAIXA_DAGUA',
            title: <Translator path="services.water_tank_cleaning_and_disinfection_card_title" />
        },
        {
            value: 'SANITIZACAO_DE_AMBIENTES',
            title: <Translator path="services.sanitization_of_environments_card_title" />
        },
        {
            value: 'SANEAMENTO_VEGETAL',
            title: <Translator path="services.plant_sanitation_card_title" />
        }
    ]

    const { handleSubmit } = props

    return (
        <div className="ContactForm">
            <h1 className="headingXl text-center mb-3 c-primary">
                <Translator path="contact_form.heading" />
            </h1>
            <form onSubmit={handleSubmit}>
                <div className="row mb-3">
                    <div className="col-md-6">
                        <Field
                            className="inputName"
                            label={ <Translator path="contact_form.input_name_label" /> }
                            name="name"
                            component={Input}
                            validate={required} />
                    </div>
                    <div className="col-md-6">
                        <Field
                            label={ <Translator path="contact_form.input_cell_number_label" /> }
                            name="telephone"
                            component={Input}
                            normalize={normalizePhone} />
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col-md-12">
                        <Field
                            type="email"
                            label={ <Translator path="contact_form.input_email_label" /> }
                            name="email"
                            component={Input} />
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col-md-9">
                        <Field
                            label={ <Translator path="contact_form.select_quote_label" /> }
                            options={options}
                            name="serviceType"
                            component={CustomSelect} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <Field
                            label={ <Translator path="contact_form.textarea_type_your_text_here" /> }
                            name="message"
                            component={Textarea} />
                    </div>
                </div>
                <div className="d-flex">
                    <Button variant="material" type="submit" size="lg">
                        <Translator path="contact_form.button" />
                    </Button>
                </div>
            </form>
        </div>
    )
}

ContactForm = reduxForm({
    form: 'contact'
})(ContactForm)

export default ContactForm