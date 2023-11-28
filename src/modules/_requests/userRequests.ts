import { User } from '@entities'
import { makeRequest } from '../_helpers/axiosHelper'

const endpoint = '/user'

interface CreateUserParams {
  email: string
  password: string
}

interface LoginUserParams {
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

export async function loginUser({
  email,
  password
}: LoginUserParams){
  const response = await makeRequest<{ accessToken: string, user: User }>({
    path: `${endpoint}/login`, 
    body: {
      email,
      password
    }, 
    method: 'POST' 
  })

  if (response instanceof Error || !response.body) return response

  response.body.user.createdAt = new Date(response.body?.user.createdAt)
  response.body.user.deletedAt = response.body?.user.deletedAt && new Date(response.body?.user.deletedAt)

  return response
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