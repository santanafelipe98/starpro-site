import React from 'react'
import ReactDOM from 'react-dom/client'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import 'bootstrap-grid-only-css/dist/css/bootstrap-grid.min.css'
import './styles/bootstrap-utilities.min.css'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { Provider } from 'react-redux'

import storeConfig from './store/storeConfig'

library.add(fab, faPhone, faEnvelope)

const store = storeConfig()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
