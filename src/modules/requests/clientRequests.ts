import axios from 'axios'
import { Client, GetQuery } from '../../types/entities'
import { GetType, Sex } from '../../types/enums'

const endpoint = '/client'

export function createClient(
    accessToken: string,
    name: string,
    phone: string,
    dateOfBirth: string,
    sex: Sex,
    email?: string
){
    return axios.post<Client>(endpoint, {
        accessToken,
        name,
        email,
        phone,
        dateOfBirth,
        sex
    })
}

export function getClient(
    accessToken: string,
    uid: string,
){
    return axios.post<Client>(endpoint, {
        accessToken,
        uid,
        type: GetType.ENTITY
    })
}

export function getClientsList(
    accessToken: string,
    userUid: string,
){
    return axios.post<Client>(endpoint, {
        accessToken,
        userUid,
        type: GetType.LIST
    })
}

export function getClientsQuery(
    accessToken: string,
    userUid: string,
    query: GetQuery
){
    return axios.post<Client>(endpoint, {
        accessToken,
        userUid,
        query,
        type: GetType.QUERY
    })
}

export function updateClient(
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

export function deleteClient(
    accessToken: string,
    uid: string,
) {
    return axios.post(endpoint, {
        accessToken,
        uid,
    })
}