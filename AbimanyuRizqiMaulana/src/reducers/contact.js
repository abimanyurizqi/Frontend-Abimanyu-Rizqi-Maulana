import {
    GET_CONTACT_FAILURE,
    GET_CONTACT_REQUEST,
    GET_CONTACT_SUCCESS,
    FIND_CONTACT_REQUEST,
    FIND_CONTACT_FAILURE,
    FIND_CONTACT_SUCCESS,
    SAVE_CONTACT_FAILURE,
    SAVE_CONTACT_REQUEST,
    SAVE_CONTACT_SUCCESS,
    DELETE_CONTACT_FAILURE,
    DELETE_CONTACT_REQUEST,
    DELETE_CONTACT_SUCCESS
} from '../actions/constants'

const defaultState = { data: null, loading: false, error: null };

export function gotContact(state = defaultState, action) {
    switch (action.type) {
        case GET_CONTACT_REQUEST:
            return {
                ...state,
                loading: true,
                data: null
            };
        case GET_CONTACT_SUCCESS:
            return {
                data: action.data,
                loading: false,
                error: null
            };
        case GET_CONTACT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default:
            return state;
    }
}

export function foundContact(state = defaultState, action) {
    switch (action.type) {
        case FIND_CONTACT_REQUEST:
            return {
                ...state,
                loading: true,
                data: null
            };
        case FIND_CONTACT_SUCCESS:
            return {
                data: action.data,
                loading: false,
                error: null
            };
        case FIND_CONTACT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default:
            return state;
    }
}

export function savedContact(state = defaultState, action) {
    switch (action.type) {
        case SAVE_CONTACT_REQUEST:
            return {
                ...state,
                loading: true,
                data: null
            };
        case SAVE_CONTACT_SUCCESS:
            return {
                data: action.data,
                loading: false,
                error: null
            };
        case SAVE_CONTACT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default:
            return state;
    }
}

export function deletedContact(state = defaultState, action) {
    switch (action.type) {
        case DELETE_CONTACT_REQUEST:
            return {
                ...state,
                loading: true,
                data: null
            };
        case DELETE_CONTACT_SUCCESS:
            return {
                data: action.data,
                loading: false,
                error: null
            };
        case DELETE_CONTACT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default:
            return state;
    }
}