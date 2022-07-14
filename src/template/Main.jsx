import React from 'react'
import Header from '../layout/Header/Header'
import Footer from '../layout/Footer/Footer'

const Main = props => (
    <div className="Main">
        <Header />
        <main>
            { props.children }
        </main>
        <Footer />
    </div>
)

export default Main