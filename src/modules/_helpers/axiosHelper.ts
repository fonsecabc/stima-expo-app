import { treatError } from '@helpers'

import axios from 'axios'

interface HttpRequest<T = any> {
  path: string
  body?: T
  method: 'GET' | 'POST' | 'PUT' | 'DELETE'
}

export type HttpResponse<T = any> = {
  statusCode: number
  body?: T
}

export async function makeRequest<T = any>(request: HttpRequest): Promise<HttpResponse<T> | Error>{
  const { path, body, method } = request
  try {

    const response = await axios.request<T>({ 
      method, 
      url: path, 
      [method === 'GET' ? 'params' : 'data']: body 
    })

    return {
      statusCode: response.status,
      body: response.data
    }
  } catch (err: any) {
    return treatError(err.response?.data.error ?? err.message)
  }
}
