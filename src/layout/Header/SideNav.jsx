import React from 'react'
import './SideNav.css'

import PropTypes from 'prop-types'
import ButtonLink from '../../common/ButtonLink/ButtonLink'
import Divider from '../../common/Divider/Divider'
import I18n from '../../common/I18n/I18n'
import { useEffect } from 'react'

const SideNav = props => {
    useEffect(() => {
        if (props.visible) {
            document.body.style.overflowY = 'hidden'
        }
        else {
            document.body.style.overflowY = 'auto'
        }
    }, [ props.visible ])

    return (
        <div className={`SideNav ${props.visible ? 'open' : ''}`}>
            <aside>
                <nav className="sideMenu">
                    <div className="d-flex justify-content-center mb-3"><I18n /></div>
                    
                    <ButtonLink className="mb-3 ml-3 mr-3" to="#">Área do cliente</ButtonLink>
                    <Divider className="mb-3" style={{ margin: '0 10%', height: '2px' }} />
                
                    <ul className="menuItems">
                        {
                            props.children
                        }
                    </ul>
                </nav>
            </aside>
        </div>
    )
}

SideNav.propTypes = {
    visible: PropTypes.bool,
}

export default SideNav