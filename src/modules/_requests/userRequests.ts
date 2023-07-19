import { User } from '../../types/entities'
import { GetType } from '../../types/enums'
import { treatError } from '../_helpers'

import axios from 'axios'

const endpoint = '/user'

export async function createUser(
  email: string,
  password: string,
  passwordConfirmation: string
){
  try {
    return await axios.request<User>({
      url: endpoint, 
      data: {
        email,
        password,
        passwordConfirmation
      }, 
      method: 'post' 
    })
  } catch (err: any) {
    return treatError(err.response?.data.error ?? err.message)
  }
}

export async function getUser(
  accessToken: string,
  uid: string,
){
  try {
    return await axios.request<User>({
      url: endpoint, 
      params: {
        accessToken,
        uid,
        type: GetType.ENTITY
      }, 
      method: 'get' 
    })
  } catch (err: any) {
    return treatError(err.response?.data.error ?? err.message)
  }

}

export async function updateUser(
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
  } catch (err: any) {
    return treatError(err.response?.data.error ?? err.message)
  }
}

export async function deleteUser(
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
  } catch (err: any) {
    return treatError(err.response?.data.error ?? err.message)
  }
}