import { User } from '../../types/entities'
import { makeRequest } from './axiosHelper'

const endpoint = '/user'

interface CreateUserParams {
  email: string
  password: string
}

interface GetUserParams {
  accessToken: string
  uid: string
}

interface UpdateUserParams {
  accessToken: string
  uid: string
  attrs: object
}

interface DeleteUserParams {
  accessToken: string
  uid: string
}

export async function createUser({
  email,
  password
}: CreateUserParams){
  return await makeRequest<User>({
    path: `${endpoint}/create`, 
    body: {
      email,
      password
    }, 
    method: 'POST' 
  })
}

export async function getUser({
  accessToken,
  uid,
}: GetUserParams){
  return await makeRequest<User>({
    path: `${endpoint}/get`, 
    body: {
      accessToken,
      uid
    }, 
    method: 'GET' 
  })
}

export async function updateUser({
  accessToken,
  uid,
  attrs
}: UpdateUserParams){
  return await makeRequest<boolean>({
    path: `${endpoint}/update`, 
    body: {
      accessToken,
      uid,
      attrs
    }, 
    method: 'PUT' 
  })
}

export async function deleteUser({
  accessToken,
  uid,
}: DeleteUserParams){
  return await makeRequest<boolean>({
    path: `${endpoint}/delete`, 
    body: {
      accessToken,
      uid
    }, 
    method: 'DELETE' 
  })
}