import { GetType, Sex } from '../../types/enums'
import { Client, ClientListObject, GetQuery } from '../../types/entities'
import { treatError } from '../errorHandler'

import axios from 'axios'

const endpoint = '/client'

export async function createClient(
    accessToken: string,
    name: string,
    phone: string,
    dateOfBirth: string,
    sex: Sex,
    email?: string
){
    try {
        return await axios.request<Client>({ 
            url: endpoint,
            data: {
                accessToken,
                name,
                email,
                phone,
                dateOfBirth,
                sex
            }, 
            method: 'post' 
        })
    } catch(err: any) {
        return treatError(err.response?.data.error ?? err.message)
    }
}

export async function getClient(
    accessToken: string,
    uid: string,
){
    try {
        return await axios.get<Client>(`${endpoint}{
                accessToken: ${accessToken},
                uid: ${uid},
                type: ${GetType.ENTITY}
            }`, 
        )
    } catch(err: any) {
        return treatError(err.response?.data.error ?? err.message)
    }
}

export async function getClientsList(
    accessToken: string,
    userUid: string,
){
    try {
        return await axios.request<ClientListObject[]>({ 
            url: endpoint,
            params: {
                accessToken: accessToken,
                userUid: userUid,
                type: GetType.LIST
            }, 
            method: 'get' 
        })
    } catch(err: any) {
        return treatError(err.response?.data.error ?? err.message)
    }
}

export async function getClientsQuery(
    accessToken: string,
    userUid: string,
    query: GetQuery
){
    try {
        return await axios.request<ClientListObject[]>({ 
            url: endpoint,
            params: {
                accessToken,
                userUid,
                query,
                type: GetType.QUERY
            }, 
            method: 'get' 
        })
    } catch(err: any) {
        return treatError(err.response?.data.error ?? err.message)
    }
}

export async function updateClient(
    accessToken: string,
    uid: string,
    attrs: object
){
    try {
        return await axios.request({ 
            url: endpoint,
            data: {
                accessToken,
                uid,
                attrs
            }, 
            method: 'update' 
        })
    } catch(err: any) {
        return treatError(err.response?.data.error ?? err.message)
    }
}

export async function deleteClient(
    accessToken: string,
    uid: string,
){
    try {
        return await axios.request({ 
            url: endpoint,
            data: {
                accessToken,
                uid,
            }, 
            method: 'delete' 
        })
    } catch(err: any) {
        return treatError(err.response?.data.error ?? err.message)
    }
}