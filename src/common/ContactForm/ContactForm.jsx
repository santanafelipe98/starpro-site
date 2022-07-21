import React from 'react'
import './ContactForm.css'

import Input from '../Input'
import Textarea from '../Textarea'
import Button from '../Button/Button'
import CustomSelect from '../CustomSelect/CustomSelect'

const ContactForm = props => {
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

    return (
        <div className="ContactForm">
            <h1 className="headingXl text-center mb-3 c-primary">Entre em contato</h1>
            <form>
                <div className="row mb-3">
                    <div className="col-md-6">
                        <Input className="inputName" label="Nome" />
                    </div>
                    <div className="col-md-6">
                        <Input label="Nº celular" />
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col-md-12">
                        <Input type="email" label="E-mail" />
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col-md-9">
                        <CustomSelect
                            label="Solicite orçamento"
                            options={options} />
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
}

export default ContactForm