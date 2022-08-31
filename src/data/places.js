import Translator from "../common/I18n/Translator"

const places = [
    {
        description: <Translator path="business_security.sea_ports_card_title" />,
        icon: `${process.env.PUBLIC_URL}/images/porto.png`
    },
    {
        description: <Translator path="business_security.airports_card_title" />,
        icon: `${process.env.PUBLIC_URL}/images/aviao.png`
    },
    {
        description: <Translator path="business_security.ships_card_title" />,
        icon: `${process.env.PUBLIC_URL}/images/navio.png`
    },
    {
        description: <Translator path="business_security.warehouses_card_title" />,
        icon: `${process.env.PUBLIC_URL}/images/armazem.png`
    },
    {
        description: <Translator path="business_security.container_card_title" />,
        icon: `${process.env.PUBLIC_URL}/images/container.png`
    }
]

export default places