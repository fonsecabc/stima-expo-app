import { Sex } from '@enums'
import { makeRequest } from '@helpers'
import { Client, ClientListObject, ClientsEvaluationHistory, Filters, PaginationFilters } from '@entities'

const endpoint = '/entities/client'

interface CreateClientRequest {
  accessToken: string
  userUid: string
  name: string
  email?: string
  phone: string
  dateOfBirth: string
  sex: Sex
  weight: number
  height: number
}

interface GetClientRequest {
  accessToken?: string
  uid: string
  userUid: string
}

interface GetClientsEvaluationHistoryRequest {
  uid: string
  userUid: string
}

interface GetClientListRequest {
  accessToken: string
  userUid: string
  paginationFilters?: PaginationFilters
  filters?: Filters
}

interface UpdateClientRequest {
  accessToken: string
  uid: string
  attrs: object
}

interface DeleteClientRequest {
  accessToken: string
  uid: string
}

export async function createClient(params: CreateClientRequest){
  return await makeRequest<Client>({ 
    path: `${endpoint}/create`,
    body: params, 
    method: 'POST' 
  })
}

export async function getClient(params: GetClientRequest){
  return await makeRequest<Client>({
    path: `${endpoint}/get`,
    body: params,
    method: 'GET'
  })
}

export async function getClientsEvaluationHistory(params: GetClientsEvaluationHistoryRequest){
  return await makeRequest<ClientsEvaluationHistory>({
    path: `${endpoint}/get-evaluations-history`,
    body: params,
    method: 'GET'
  })
}

export async function getClientsList(params: GetClientListRequest){
  return await makeRequest<ClientListObject[]>({ 
    path: `${endpoint}/get-list`,
    body: params,
    method: 'GET' 
  })
}

export async function updateClient(params: UpdateClientRequest){
  return await makeRequest({ 
    path: `${endpoint}/update`,
    body: params, 
    method: 'PUT' 
  })
}

export async function deleteClient(params: DeleteClientRequest){
  return await makeRequest({ 
    path: `${endpoint}/delete`,
    body: params, 
    method: 'DELETE' 
  })
}