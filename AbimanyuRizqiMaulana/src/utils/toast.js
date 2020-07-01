import React from 'react';
import {Toast} from 'native-base';

export function showError(error){
    Toast.show({
        text: error.toString(),
        buttonText: "OK",
        type: "danger",
        duration: 4000
    })
}

export function showErrorString(word){
    Toast.show({
        text: word,
        buttonText: "OK",
        type: "danger",
        duration: 4000
    })
}

export function showSuccess(word){
    Toast.show({
        text: word,
        buttonText: "OK",
        type: "success",
        duration: 4000
    })
}