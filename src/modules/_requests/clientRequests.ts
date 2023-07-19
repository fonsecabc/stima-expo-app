import { treatError } from '../_helpers'
import { GetType, Sex } from '../../types/enums'
import { Client, ClientListObject, GetQuery } from '../../types/entities'

import axios from 'axios'

const endpoint = '/client'

export type CreateClientRequest = {
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

export async function createClient(params: CreateClientRequest){
  try {
    return await axios.request<Client>({ 
      url: endpoint,
      data: params, 
      method: 'post' 
    })
  } catch(err: any) {
    return treatError(err.response?.data.error ?? err.message)
  }
}

export type GetClientRequest = {
  accessToken: string
  uid: string
  userUid: string
}

export async function getClient(params: GetClientRequest){
  try {
    return await axios.request<Client>({
      url: endpoint,
      params: {
        ...params,
        type: GetType.ENTITY
      },
      method: 'get'
    })
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