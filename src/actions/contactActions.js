import axios from 'axios'
import { reset } from 'redux-form'
import { ACTION_CONTACT_SENT_MESSAGE_STATUS } from './contactActionTypes'

const BASE_URL = 'https://mailer.starproambiental.com.br'

export function sendMessage(data) {
    return dispatch => {
        dispatch({ type: ACTION_CONTACT_SENT_MESSAGE_STATUS, payload: { status: 'SENDING' } })

        axios.post(
            `${BASE_URL}/`,
            data,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
        ).then(
            () => {
                dispatch({ type: ACTION_CONTACT_SENT_MESSAGE_STATUS, payload: { status: 'DONE' } })
            }
        ).catch(error => {
            if (error.response) {
                if (error.response.status === 200) {
                    dispatch({ type: ACTION_CONTACT_SENT_MESSAGE_STATUS, payload: { status: 'DONE' } })
                } else {
                    dispatch({
                        type: ACTION_CONTACT_SENT_MESSAGE_STATUS,
                        payload: {
                            status: 'ERROR',
                            errors: error.response.data ? error.response.errors : [ 'Erro' ]
                        }
                    })
                }
            } else {
                dispatch({
                    type: ACTION_CONTACT_SENT_MESSAGE_STATUS,
                    payload: {
                        status: 'ERROR',
                        errors: [ "Erro de conexão" ]
                    }
                })
            }
            
        }).finally(() => dispatch(reset('contact')))
    }
}