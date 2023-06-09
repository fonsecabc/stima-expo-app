import { HttpRequest, HttpResponse, HttpClientContract } from '../../domain/contracts'
import axios, { AxiosResponse } from 'axios'
import { variables } from '../../main/config'

export class HttpRepository implements HttpClientContract {
    public static async getInstance<R>(): Promise<HttpClientContract> {
        const instance: HttpClientContract<R> = new HttpRepository()
        return instance
    }

    async request(data: HttpRequest): Promise<HttpResponse> {
        let axiosResponse: AxiosResponse
        if (!data.url.startsWith('http://') && !data.url.startsWith('https://')) data.url = `https://${data.url}`

        try {
            axiosResponse = await axios.request({
                url: data.url,
                method: data.method,
                data: { apiKey: variables.apiKey, ...data.body },
                headers: data.headers
            })
        } catch (error: any) {
            if (error.message === 'Network Error') {
                error.message = 'Sem conexão'
            }
            return {
                statusCode: 400,
                body: { error: error.message }
            }
        }
        return {
            statusCode: axiosResponse.status,
            body: axiosResponse.data
        }
    }
}
