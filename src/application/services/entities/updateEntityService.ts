import { variables } from '../../../main/config'
import { HttpRepository } from '../../../infra/repositories'
import { HttpClientContract } from '../../../domain/contracts'
import { UpdateEntityUsecase } from '../../../domain/usecases'

export async function UpdateEntityService(params: UpdateEntityUsecase.Params): Promise<UpdateEntityUsecase.Response> {
    const { accessToken, entity, uid, attrs } = params
    const httpClient: HttpClientContract<true> = await HttpRepository.getInstance<true>()

    const response =  await httpClient.request({
        url: `${variables.apiEndpoint}/${entity}`,
        method: 'PUT',
        body: { apiKey: variables.apiKey, uid, attrs },
        headers: { 'Authorization': `Bearer ${accessToken}` }

    })

    if (response.statusCode < 200 && response.statusCode > 300 && typeof response.body === 'string' || typeof response.body === 'string' ) {
        return new Error(response.body)
    }

    return response.body
}