export type HttpRequest = {
  url: string
  method: HttpMethod
  body?: any
  headers?: any
}

export interface HttpClientContract<T = any> {
  request(data: HttpRequest): Promise<HttpResponse<T>>
}

export type HttpMethod = 'POST' | 'GET' | 'PUT' | 'DELETE'

export type HttpResponse<R = any> = {
  statusCode: number
  body: R
}
