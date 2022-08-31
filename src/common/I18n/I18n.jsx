import React, { useCallback } from 'react'
import './I18n.css'

import { useTranslation } from 'react-i18next'

import { BrasilFlag, EuaFlag, SpainFlag } from '../../assets'
import Flag from './Flag'

const I18n = () => {
    const { i18n } = useTranslation()

    const handleChangeLanguage = useCallback(language => {
        i18n.changeLanguage(language)
    }, [])

    const selectedLanguage = i18n.language

    return (
        <div className="flags-container">
            <Flag
                image={BrasilFlag}
                isSelected={selectedLanguage === 'pt-BR'}
                onClick={() => handleChangeLanguage('pt-BR')} />

            <Flag
                image={EuaFlag}
                isSelected={selectedLanguage === 'en-US'}
                onClick={() => handleChangeLanguage('en-US')} />

            <Flag
                image={SpainFlag}
                isSelected={selectedLanguage === 'es'}
                onClick={() => handleChangeLanguage('es')} />
        </div>
    )
}

export default I18n