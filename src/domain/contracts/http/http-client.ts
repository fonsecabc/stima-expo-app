export type HttpRequest = {
  url: string
  method: HttpMethod
  body?: any
  headers?: any
}

export interface HttpClient<R = any> {
  request: (data: HttpRequest) => Promise<HttpResponse<R>>
}

export type HttpMethod = 'POST' | 'GET' | 'PUT' | 'DELETE'

export type HttpResponse<T = any> = {
  statusCode: number
  body?: T
}
