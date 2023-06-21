import { variables } from '../../../main/config'
import { HttpRepository } from '../../../infra/repositories'
import { HttpClientContract } from '../../contracts'
import { DeleteEntityUsecase } from '../../../domain/usecases'

export async function DeleteEntityService(params: DeleteEntityUsecase.Params): Promise<DeleteEntityUsecase.Response> {
    const { accessToken, entity, uid } = params
    const httpClient: HttpClientContract<true> = await HttpRepository.getInstance<true>()

    const response =  await httpClient.request({
        url: `${variables.apiEndpoint}/${entity}`,
        method: 'DELETE',
        body: { apiKey: variables.apiKey, uid },
        headers: { 'Authorization': `Bearer ${accessToken}` }
    })

    if (response.statusCode < 200 && response.statusCode > 300 && typeof response.body === 'string' || typeof response.body === 'string' ) {
        return new Error(response.body)
    }

    return response.body
}