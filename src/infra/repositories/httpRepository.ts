import { variables } from '../../main/config'
import { handleErrorService } from '../../application/services'
import { HttpRequest, HttpResponse, HttpClientContract } from '../../application/contracts'

import axios, { AxiosResponse } from 'axios'

export class HttpRepository<T> implements HttpClientContract {
    public static async getInstance<T>(): Promise<HttpClientContract<T>> {
        const instance: HttpClientContract<T> = new HttpRepository<T>()
        return instance
    }

    async request(data: HttpRequest): Promise<HttpResponse<T>> {
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

            return {
                statusCode: axiosResponse.status,
                body: axiosResponse.data
            }
        } catch (err: any) {
            const error = await handleErrorService(err.response.data.error)
            return {
                statusCode: 400,
                body: error.message
            }
        }
    }
}
