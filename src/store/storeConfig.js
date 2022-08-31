import rootReducer from '../reducers/main'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'

function storeConfig() {
    return createStore(rootReducer, applyMiddleware(thunk))
}

export default storeConfig