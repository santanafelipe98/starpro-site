import React, { useMemo } from 'react'
import PropTypes from 'prop-types'

import './PageHeader.css'

const PageHeader = props => {
    const styles = useMemo(() => ({
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/page-header-bg.png)`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '105% 50%',
        backgroundSize: '60%',
        marginTop: props.navbarFixed ? '80px' : '0',
        paddingTop: props.padding ? props.padding.top || '0' : '0',
        paddingBottom: props.padding ? props.padding.bottom || '0' : '0',
        paddingLeft: props.padding ? props.padding.left || '0' : '0',
        paddingRight: props.padding ? props.padding.right || '0' : '0'
    }), [props.padding, props.navbarFixed])

    return (
        <section style={styles} className="PageHeader">
            {  props.children }
        </section>
    )
}

PageHeader.propTypes = {
    padding: PropTypes.shape({
        top: PropTypes.string,
        bottom: PropTypes.string,
        left: PropTypes.string,
        right: PropTypes.string
    }),
    navbarFixed: PropTypes.bool
}

export default PageHeader