import rootReducer from '../reducers/main'
import { createStore } from 'redux'

function storeConfig() {
    return createStore(rootReducer)
}

export default storeConfig