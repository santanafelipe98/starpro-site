import React from 'react'
import './ContactForm.css'

import Input from '../Input'
import Textarea from '../Textarea'
import Button from '../Button/Button'

const ContactForm = props => (
    <div className="ContactForm">
        <h1 className="headingXl text-center mb-3 c-primary">Entre em contato</h1>
        <form>
            <div className="row mb-3">
                <div className="col-md-6">
                    <Input label="Nome" />
                </div>
                <div className="col-md-6">
                    <Input label="Nº celular" />
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-md-12">
                    <Input type="email" label="E-mail" />
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <Textarea label="Digite sua mensagem aqui" />
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

export default ContactForm