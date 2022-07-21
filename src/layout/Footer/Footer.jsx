import React from 'react'
import SocialMedia from '../../common/SocialMedia/SocialMedia'
import '../../styles/Footer.css'
import ContactInfo from './ContactInfo'
import FooterNav from './FooterNav'


const items = [
    {
        href: '/',
        title: 'Home'
    },
    {
        href: 'a-starpro',
        title: 'Starpro'
    },
    {
        href: '#contate_nos',
        title: 'Contato',
        hash: true
    }
]

const socials = [
    {
        href: 'https://www.facebook.com/starprosaudeambiental/',
        icon: 'facebook-f'
    },
    {
        href: 'https://www.instagram.com/starprosaudeambiental/',
        icon: 'instagram'
    },
    {
        href: 'https://www.linkedin.com/company/starprosaudeambiental/',
        icon: 'linkedin-in'
    }
]

const Footer = props => {
    return (
        <footer className="Footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <FooterNav
                            items={items} />
                    </div>
                    <div className="col-sm-12 col-md-9 d-flex justify-content-end align-items-start brandWrapper">
                        <img
                            src={ `${process.env.PUBLIC_URL}/images/logotipo_branco.png` }
                            alt="Logotipo branco Starpro" className="footerBrand" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-md-7 d-flex row justify-content-end contact">
                        <ContactInfo />
                    </div>
                    <div className="col-sm-12 col-md-5 d-flex row justify-content-end social">
                        <SocialMedia
                            items={socials} />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer