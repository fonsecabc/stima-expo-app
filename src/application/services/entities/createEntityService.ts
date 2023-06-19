import { variables } from '../../../main/config'
import { Entity } from '../../../domain/entities'
import { HttpRepository } from '../../../infra/repositories'
import { HttpClientContract } from '../../../domain/contracts'
import { CreateEntityUsecase } from '../../../domain/usecases'

export async function CreateEntityService(params: CreateEntityUsecase.Params): Promise<CreateEntityUsecase.Response> {
    const { accessToken, entity, body } = params
    const httpClient: HttpClientContract<Entity> = await HttpRepository.getInstance<Entity>()

    const response =  await httpClient.request({
        url: `${variables.apiEndpoint}/${entity}`,
        method: 'POST',
        body: {  apiKey: variables.apiKey, ...body },
        headers: { 'Authorization': `Bearer ${accessToken}` }
    })

    if (response.statusCode < 200 && response.statusCode > 300 && typeof response.body === 'string' || typeof response.body === 'string' ) {
        return new Error(response.body)
    }

    return response.body
}