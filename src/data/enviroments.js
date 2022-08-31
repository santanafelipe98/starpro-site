import Translator from "../common/I18n/Translator";

const enviroments = [
    {
        img: `${process.env.PUBLIC_URL}/images/condominio.png`,
        description: <Translator path="sanitization_of_environments.item_condominiums" />
    },
    {
        img: `${process.env.PUBLIC_URL}/images/casas.png`,
        description: <Translator path="sanitization_of_environments.item_houses" />
    },
    {
        img: `${process.env.PUBLIC_URL}/images/restaurantes.png`,
        description: <Translator path="sanitization_of_environments.item_restaurants" />
    },
    {
        img: `${process.env.PUBLIC_URL}/images/industrias.png`,
        description: <Translator path="sanitization_of_environments.item_industries" />
    },
    {
        img: `${process.env.PUBLIC_URL}/images/Hoteis.png`,
        description: <Translator path="sanitization_of_environments.item_hotels" />
    },
    {
        img: `${process.env.PUBLIC_URL}/images/Hospitais.png`,
        description: <Translator path="sanitization_of_environments.item_hospitals" />
    }
]

export default enviroments