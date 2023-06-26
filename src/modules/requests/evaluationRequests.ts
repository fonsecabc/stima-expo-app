import { Evaluation, EvaluationListObject, GetQuery } from '../../types/entities'
import { GetType, Sex } from '../../types/enums'
import { treatError } from '../errorHandler'

import axios from 'axios'

const endpoint = '/evaluation'

export async function createEvaluation(
    accessToken: string,
    userUid: string,
    client: {
        name: string,
        email?: string,
        phone: string,
        dateOfBirth: string,
        sex: Sex
    },
    bioimpedance?: object,
    measurements?: object,
    nutricionistForm?: object
){ 
    try {
        return await axios.request<Evaluation>({
            url: endpoint,
            data: {
                accessToken: accessToken,
                userUid: userUid,
                client: client,
                bioimpedance: bioimpedance,
                measurements: measurements,
                nutricionistForm: nutricionistForm
            },
            method: 'post' 
        })
    } catch(err: any) {
        return treatError(err.response?.data.error ?? err.message)
    }
}

export async function getEvaluation(
    accessToken: string,
    uid: string,
){ 
    try {
        return await axios.request<Evaluation>({
            url: endpoint,
            params: {
                accessToken: accessToken,
                uid: uid,
                type: GetType.ENTITY
            },
            method: 'get'
        })
    } catch(err: any) {
        return treatError(err.response?.data.error ?? err.message)
    }
}

export async function getEvaluationsList(
    accessToken: string,
    userUid: string,
){ 
    try {
        return await axios.request<EvaluationListObject[]>({
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

export async function getEvaluationsQuery(
    accessToken: string,
    userUid: string,
    query: GetQuery
){ 
    try {
        return await axios.request<EvaluationListObject[]>({
            url: endpoint,
            params: {
                accessToken: accessToken,
                userUid: userUid,
                query: query,
                type: GetType.QUERY
            },
            method: 'get' 
        })
    } catch(err: any) {
        return treatError(err.response?.data.error ?? err.message)
    }
}

export async function updateEvaluation(
    accessToken: string,
    uid: string,
    attrs: object
){ 
    try {
        return await axios.request({
            url: endpoint,
            data: {
                accessToken: accessToken,
                uid: uid,
                attrs: attrs
            },
            method: 'update' 
        })
    } catch(err: any) {
        return treatError(err.response?.data.error ?? err.message)
    }
}

export async function deleteEvaluation(
    accessToken: string,
    uid: string,
){ 
    try {
        return await axios.request({
            url: endpoint,
            data: {
                accessToken: accessToken,
                uid: uid,
            },
            method: 'delete' 
        })
    } catch(err: any) {
        return treatError(err.response?.data.error ?? err.message)
    }
}