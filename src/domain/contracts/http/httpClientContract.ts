export type HttpRequest = {
  url: string
  method: HttpMethod
  body?: any
  headers?: any
}

export interface HttpClientContract<R = any> {
  request: (data: HttpRequest) => Promise<HttpResponse<R>>
}

export type HttpMethod = 'POST' | 'GET' | 'PUT' | 'DELETE'

export type HttpResponse<T = any> = {
  statusCode: number
  body: {
    error?: string,
    data: T
  }
}
