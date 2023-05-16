import { HttpRequest, HttpResponse, HttpClient } from '@/domain/contracts'
import axios, { AxiosResponse } from 'axios'

export class AxiosHttpClient implements HttpClient {
    async request(data: HttpRequest): Promise<HttpResponse> {
        let axiosResponse: AxiosResponse
        if (!data.url.startsWith('http://') && !data.url.startsWith('https://')) data.url = `https://${data.url}`

        try {
            axiosResponse = await axios.request({
                url: data.url,
                method: data.method,
                data: data.body,
                headers: data.headers
            })
        } catch (error: any) {
            axiosResponse = error.response
        }
        return {
            statusCode: axiosResponse.status,
            body: axiosResponse.data
        }
    }
}
