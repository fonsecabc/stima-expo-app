import axios from 'axios'
import { Evaluation, GetQuery } from '../../types/entities'
import { GetType, Sex } from '../../types/enums'

const endpoint = '/evaluation'

export function createEvaluation(
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
    return axios.post<Evaluation>(endpoint, {
        accessToken,
        userUid,
        client,
        bioimpedance,
        measurements,
        nutricionistForm
    })
}

export function getEvaluation(
    accessToken: string,
    uid: string,
){
    return axios.post<Evaluation>(endpoint, {
        accessToken,
        uid,
        type: GetType.ENTITY
    })
}

export function getEvaluationsList(
    accessToken: string,
    userUid: string,
){
    return axios.post<Evaluation>(endpoint, {
        accessToken,
        userUid,
        type: GetType.LIST
    })
}

export function getEvaluationsQuery(
    accessToken: string,
    userUid: string,
    query: GetQuery
){
    return axios.post<Evaluation>(endpoint, {
        accessToken,
        userUid,
        query,
        type: GetType.QUERY
    })
}

export function updateEvaluation(
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

export function deleteEvaluation(
    accessToken: string,
    uid: string,
) {
    return axios.post(endpoint, {
        accessToken,
        uid,
    })
}