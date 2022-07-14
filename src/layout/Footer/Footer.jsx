import React from 'react'
import SocialMedia from '../../common/SocialMedia/SocialMedia'
import '../../styles/Footer.css'
import ContactInfo from './ContactInfo'
import FooterNav from './FooterNav'

const items = [
    {
        href: '#',
        title: 'Home'
    },
    {
        href: '#',
        title: 'Starpro'
    },
    {
        href: '#',
        title: 'Contato'
    }
]

const socials = [
    {
        href: '#',
        icon: 'facebook-f'
    },
    {
        href: '#',
        icon: 'instagram'
    },
    {
        href: '#',
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
                            items={items}
                            activeIndex={0} />
                    </div>
                    <div className="col-md-9 d-flex justify-content-end align-items-start">
                        <img
                            src={ `${process.env.PUBLIC_URL}/images/logotipo_branco.png` }
                            alt="Logotipo branco Starpro" className="footerBrand" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-7 d-flex row justify-content-end">
                        <ContactInfo />
                    </div>
                    <div className="col-md-5 d-flex row justify-content-end">
                        <SocialMedia
                            items={socials} />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer