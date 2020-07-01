import {
    GET_CONTACT_REQUEST,
    FIND_CONTACT_REQUEST,
    SAVE_CONTACT_REQUEST,
    DELETE_CONTACT_REQUEST
} from './constants';

export function getContact(){
    return{
        type: GET_CONTACT_REQUEST,
    }
}

export function findContact(id){
    return{
        type: FIND_CONTACT_REQUEST,
        id: id
    }
}

export function saveContact(data){
    return{
        type: SAVE_CONTACT_REQUEST,
        data: data
    }
}

export function deleteContact(id){
    return{
        type: DELETE_CONTACT_REQUEST,
        data: id
    }
}