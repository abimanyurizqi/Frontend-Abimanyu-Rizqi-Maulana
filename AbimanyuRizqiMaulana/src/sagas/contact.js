import {
    GET_CONTACT_REQUEST,
    GET_CONTACT_FAILURE,
    GET_CONTACT_SUCCESS,

    FIND_CONTACT_REQUEST,
    FIND_CONTACT_FAILURE,
    FIND_CONTACT_SUCCESS,
    
    SAVE_CONTACT_FAILURE,
    SAVE_CONTACT_SUCCESS,
    SAVE_CONTACT_REQUEST,

    DELETE_CONTACT_FAILURE,
    DELETE_CONTACT_REQUEST,
    DELETE_CONTACT_SUCCESS
} from '../actions/constants';

import { commonAxios } from '../utils/apiutils';
import { put, takeLatest } from 'redux-saga/effects';

function* getContact() {
    
    try {
        const data = yield commonAxios.get('contact');
        yield put({
            type: GET_CONTACT_SUCCESS,
            data: data,
        });

    } catch (error) {
        yield put({
            type: GET_CONTACT_FAILURE,
            error: error,
        });
    };
}

function* saveContact(action) {
    const { id, firstName, lastName, age, photo } = action.data;
    
    try {
        const data = yield id ? 
        commonAxios.put(`contact/${id}`, {firstName, lastName, age, photo}) :
        commonAxios.post('contact', {firstName: firstName, lastName: lastName, age: age, photo: photo});
        yield put({
            type: SAVE_CONTACT_SUCCESS,
            data: data
        });

    } catch (error) {
        yield put({
            type: SAVE_CONTACT_FAILURE,
            error: error,
        });
    };
}

function* findContact(action) {
    
    try {
        const data = yield commonAxios.get(`contact/${action.id}`);
        yield put({
            type: FIND_CONTACT_SUCCESS,
            data: data,
        });

    } catch (error) {
        yield put({
            type: FIND_CONTACT_FAILURE,
            error: error,
        });
    };
}

function* deleteContact(action) {
    
    try {
        const data = yield commonAxios.delete(`contact/${action.id}`);
        yield put({
            type: DELETE_CONTACT_SUCCESS,
            data: data,
        });

    } catch (error) {
        yield put({
            type: DELETE_CONTACT_FAILURE,
            error: error,
        });
    };
}

export function* watchGetContact() {
    yield takeLatest(GET_CONTACT_REQUEST, getContact);
}

export function* watchFindContact() {
    yield takeLatest(FIND_CONTACT_REQUEST, findContact);
}

export function* watchSaveContact() {
    yield takeLatest(SAVE_CONTACT_REQUEST, saveContact);
}

export function* watchDeleteContact() {
    yield takeLatest(DELETE_CONTACT_REQUEST, deleteContact);
}