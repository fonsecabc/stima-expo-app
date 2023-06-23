import axios from 'axios'
import { User } from '../../types/entities'
import { GetType } from '../../types/enums'

const endpoint = '/user'

export function createUser(
    email: string,
    password: string,
    passwordConfirmation: string
){
    return axios.post<User>(endpoint, {
        email,
        password,
        passwordConfirmation
    })
}

export function getUser(
    accessToken: string,
    uid: string,
){
    return axios.post<User>(endpoint, {
        accessToken,
        uid,
        type: GetType.ENTITY
    })
}

export function updateUser(
    accessToken: string,
    uid: string,
    attrs: object
) {
    return axios.post(endpoint, {
        accessToken,
        uid,
        attrs
    })
}

export function deleteUser(
    accessToken: string,
    uid: string,
) {
    return axios.post(endpoint, {
        accessToken,
        uid,
    })
}