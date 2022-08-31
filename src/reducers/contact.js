import { ACTION_CONTACT_SENT_MESSAGE_STATUS } from "../actions/contactActionTypes"

const initialState = {
    status: 'PENDING',
    errors: []
}

export function contactReducer(state = initialState, action) {
    switch (action.type) {
        case ACTION_CONTACT_SENT_MESSAGE_STATUS:
            return { ...state, ...action.payload }
        default:
            return state
    }
}