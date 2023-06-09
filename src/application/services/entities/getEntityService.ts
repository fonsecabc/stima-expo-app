import { GetType } from '../../../domain/enums'
import { variables } from '../../../main/config'
import { GetEntityUsecase } from '../../../domain/usecases'
import { HttpRepository } from '../../../infra/repositories'
import { User, Evaluation, Client } from '../../../domain/entities'

export async function GetEntityService<Entity = User | Evaluation | Client>(params: GetEntityUsecase.Params): Promise<GetEntityUsecase.Response<Entity>> {
    const { accessToken, entity, type, uid, query, userUid } = params

    const getType = new Map<GetType, any>

    getType.set(GetType.ENTITY, () => { return { uid } })
    getType.set(GetType.LIST, () => { return { userUid } })
    getType.set(GetType.QUERY, () => { return { query, userUid } })
    
    const response =  await (await HttpRepository.getInstance<Entity | Entity[]>()).request({
        url: `${variables.apiEndpoint}/${entity}`,
        method: 'GET',
        body: getType.get(type),
        headers: { 'Authorization': `Bearer ${accessToken}` }
    })

    if (response.body.error) return new Error(response.body.error)

    return response.body.data
}