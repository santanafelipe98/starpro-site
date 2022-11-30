import Translator from '../common/I18n/Translator'

const services = [
    {
        _id: 'tratamento_fitossanitario',
        buttonLink: 'servicos/tratamento-fitossanitario',
        iconURL: `${process.env.PUBLIC_URL}/images/tratamento-fitossanitario.png`,
        title: <Translator path="services.phytosanitary_treatment_card_title" />,
        text: <Translator path="services.phytosanitary_treatment_card_text" />
    },
    {
        _id: 'controle_de_pragas_urbanas',
        buttonLink: 'servicos/controle-de-pragas-urbanas',
        iconURL: `${process.env.PUBLIC_URL}/images/controle-de-pragas.png`,
        title: <Translator path="services.urban_pest_control_card_title" />,
        text: <Translator path="services.urban_pest_control_card_text" />
    },
    {
        _id: 'limpeza_e_desinfeccao_de_caixa_dagua',
        buttonLink: 'servicos/limpeza-e-desinfeccao-de-caixa-dagua',
        iconURL: `${process.env.PUBLIC_URL}/images/seguro-residencial.png`,
        title: <Translator path="services.water_tank_cleaning_and_disinfection_card_title" />,
        text: <Translator path="services.water_tank_cleaning_and_disinfection_card_text" />
    },
    {
        _id: 'sanitizacao_de_ambientes',
        buttonLink: 'servicos/sanitizacao-de-ambientes',
        iconURL: `${process.env.PUBLIC_URL}/images/tanque-de-agua.png`,
        title: <Translator path="services.sanitization_of_environments_card_title" />,
        text: <Translator path="services.sanitization_of_environments_card_text" />
    },
    {
        _id: 'saneamento_vegetal',
        buttonLink: 'servicos/paisagismo',
        iconURL: `${process.env.PUBLIC_URL}/images/cortador-de-grama.png`,
        title: <Translator path="services.plant_sanitation_card_title" />,
        text: <Translator path="services.plant_sanitation_card_text" />
    }
]

export default services