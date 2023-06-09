import { variables } from '../../main/config'
import { HandlerErrorService } from '../../application/services'
import { HttpRequest, HttpResponse, HttpClientContract } from '../../domain/contracts'

import axios, { AxiosResponse } from 'axios'

export class HttpRepository<R> implements HttpClientContract {
    public static async getInstance<R>(): Promise<HttpClientContract> {
        const instance: HttpClientContract = new HttpRepository<R>()
        return instance
    }

    async request(data: HttpRequest): Promise<HttpResponse<R>> {
        let axiosResponse: AxiosResponse
        if (!data.url.startsWith('http://') && !data.url.startsWith('https://')) data.url = `https://${data.url}`

        try {
            axiosResponse = await axios.request({
                url: data.url,
                method: data.method,
                data: { apiKey: variables.apiKey, ...data.body },
                headers: {
                    ...data.headers,
                    'Access-Control-Allow-Origin': 'http://localhost:19006',
                    'Content-Type': 'application/json', 
                    'Accept': '*/*',
                }
            })
        } catch (err: any) {
            const error = await HandlerErrorService(err.message)
            return {
                statusCode: 400,
                body: { error: error.message }
            }
        }
        if (axiosResponse.status >= 200 && axiosResponse.status < 300) {
            return {
                statusCode: axiosResponse.status,
                body: { data: axiosResponse.data }
            }
        }
        return {
            statusCode: axiosResponse.status,
            body: { error: axiosResponse.data.error }
        }
    }
}
