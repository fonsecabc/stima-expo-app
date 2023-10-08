import { makeRequest } from '../_helpers/axiosHelper'
import { GetType, NutritionalRoutineStatus, Sex } from '@enums'
import { Evaluation, EvaluationListObject, GetQuery } from '@entities'

const endpoint = '/entities/evaluation'

interface CreateEvaluationParams {
  accessToken: string
  userUid: string
  client: {
    name: string
    email?: string
    phone: string
    dateOfBirth: string
    sex: Sex
    height: number
    weight: number
  }
  bioimpedance?: object
  measurements?: object
  nutricionistForm?: object
  nutritionalRoutineStatus?: NutritionalRoutineStatus
}

interface GetEvaluationParams {
  accessToken: string
  uid: string
  userUid: string
}

interface GetEvaluationsListParams {
  accessToken: string
  userUid: string
}

interface GetEvaluationsQueryParams {
  accessToken: string
  userUid: string
  query: GetQuery
}

interface UpdateEvaluationParams {
  accessToken: string
  uid: string
  attrs: object
}

interface DeleteEvaluationParams {
  accessToken: string
  uid: string
}

export async function createEvaluation(params: CreateEvaluationParams){
  return await makeRequest<Evaluation>({
    path: `${endpoint}/create`, 
    body: params,
    method: 'POST' 
  })
}

export async function getEvaluation(params: GetEvaluationParams){
  return await makeRequest<Evaluation>({
    path: `${endpoint}/get`, 
    body: {
      ...params,
      type: GetType.ENTITY
    }, 
    method: 'GET' 
  })
}

export async function getEvaluationsList(params: GetEvaluationsListParams){
  return await makeRequest<EvaluationListObject[]>({
    path: `${endpoint}/get`, 
    body: {
      ...params,
      type: GetType.LIST
    }, 
    method: 'GET' 
  })
}

export async function getEvaluationsQuery(params: GetEvaluationsQueryParams){
  return await makeRequest<EvaluationListObject[]>({
    path: `${endpoint}/get`, 
    body: {
      ...params,
      type: GetType.QUERY
    }, 
    method: 'GET' 
  })
}

export async function updateEvaluation(params: UpdateEvaluationParams){
  return await makeRequest({
    path: `${endpoint}/update`, 
    body: params, 
    method: 'PUT' 
  })
}

export async function deleteEvaluation(params: DeleteEvaluationParams){
  return await makeRequest({
    path: `${endpoint}/delete`, 
    body: params, 
    method: 'DELETE' 
  })
}