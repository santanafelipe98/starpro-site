import axios from 'axios'
import { ACTION_CONTACT_SENT_MESSAGE_STATUS } from './contactActionTypes'

const BASE_URL = 'http://localhost:8080'

export function sendMessage({ name, email, phone, service, message }) {
    return dispatch => {
        dispatch({ type: ACTION_CONTACT_SENT_MESSAGE_STATUS, payload: { status: 'SENDING' } })

        axios.post(
            `${BASE_URL}/api/mailer`,
            { name, email, phone, service, message }
        ).then(
            resp => {
                console.log(resp.data)
                dispatch({ type: ACTION_CONTACT_SENT_MESSAGE_STATUS, payload: { status: 'DONE' } })
            }
        ).catch(error => dispatch({
            type: ACTION_CONTACT_SENT_MESSAGE_STATUS,
            payload: {
                status: 'ERROR',
                errors: error.response.data ? error.response.errors : [ 'Erro' ]
            }
        }))
    }    
}