import React from 'react'
import './ContactForm.css'

import Input from '../Input'
import Textarea from '../Textarea'
import Button from '../Button/Button'
import CustomSelect from '../CustomSelect/CustomSelect'
import normalizePhone from '../../utils/normalizePhone'
import { Field, reduxForm } from 'redux-form'
import { isPhone, isEmail, required } from '../../utils/formValidations'

let ContactForm = props => {
    const options = [
        {
            value: '',
            title: 'Selecione o serviço'
        },
        {
            value: 'TRATAMENTO_FITOSSANITARIO',
            title: 'Tratamento Fitossanitário',
        },
        {
            value: 'CONTROLE_DE_PRAGAS_URBANAS',
            title: 'Controle de Pragas Urbanas'
        },
        {
            value: 'LIMPEZA_E_DESINFECCAO_DE_CAIXA_DAGUA',
            title: 'Limpeza e Desinfecção de Caixa D\'água'
        },
        {
            value: 'SANITIZACAO_DE_AMBIENTES',
            title: 'Sanitização de Ambientes'
        },
        {
            value: 'SANEAMENTO_VEGETAL',
            title: 'Saneamento Vegetal'
        }
    ]

    const { handleSubmit } = props

    return (
        <div className="ContactForm">
            <h1 className="headingXl text-center mb-3 c-primary">Entre em contato</h1>
            <form onSubmit={handleSubmit}>
                <div className="row mb-3">
                    <div className="col-md-6">
                        <Field
                            className="inputName"
                            label="Nome"
                            name="name"
                            component={Input}
                            validate={required} />
                    </div>
                    <div className="col-md-6">
                        <Field
                            label="Nº celular"
                            name="telephone"
                            component={Input}
                            normalize={normalizePhone}
                            validate={[required, isPhone]} />
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col-md-12">
                        <Field
                            type="email"
                            label="E-mail"
                            name="email"
                            component={Input}
                            validate={[required, isEmail]} />
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col-md-9">
                        <Field
                            label="Solicite orçamento"
                            options={options}
                            name="serviceType"
                            component={CustomSelect} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <Field
                            label="Digite sua mensagem aqui"
                            name="message"
                            component={Textarea} />
                    </div>
                </div>
                <div className="d-flex">
                    <Button variant="material" type="submit" size="lg">
                        Enviar
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