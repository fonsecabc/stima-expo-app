import { GetType } from '../../../domain/enums'
import { variables } from '../../../main/config'
import { GetEntityUsecase } from '../../../domain/usecases'
import { HttpRepository } from '../../../infra/repositories'
import { HttpClientContract } from '../../../domain/contracts'

export async function GetEntityService<Entity = any>(params: GetEntityUsecase.Params): Promise<GetEntityUsecase.Response<Entity>> {
    const { accessToken, entity, type, uid, query, userUid } = params
    const httpClient: HttpClientContract<Entity> = await HttpRepository.getInstance<Entity>()

    const getType = new Map<GetType, any>

    getType.set(GetType.ENTITY, () => { return { uid } })
    getType.set(GetType.LIST, () => { return { userUid } })
    getType.set(GetType.QUERY, () => { return { query, userUid } })
    
    const response =  await httpClient.request({
        url: `${variables.apiEndpoint}/${entity}`,
        method: 'GET',
        body: { apiKey: variables.apiKey, ...getType.get(type) },
        headers: { 'Authorization': `Bearer ${accessToken}` }
    })

    if (response.statusCode < 200 && response.statusCode > 300 && typeof response.body === 'string' || typeof response.body === 'string' ) {
        return new Error(response.body)
    }

    return response.body
}