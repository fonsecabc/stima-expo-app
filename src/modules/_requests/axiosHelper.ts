import axios from 'axios'
import { treatError } from '../_helpers'

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
  try {
    const { path, body, method } = request

    let response
    if (method === 'GET') {
      response = await axios.request<T>({
        url: path, 
        params: body,
        method: method 
      })
    } else {
      response = await axios.request<T>({
        url: path, 
        data: body,
        method: method 
      })
    }

    return {
      statusCode: response.status,
      body: response.data
    }
  } catch (err: any) {
    return treatError(err.response?.data.error ?? err.message)
  }
}
