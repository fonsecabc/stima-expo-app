import { variables } from '../../../main/config'
import { CreateEntityUsecase } from '../../../domain/usecases'
import { HttpRepository } from '../../../infra/repositories'
import { User, Evaluation, Client } from '../../../domain/entities'

export async function CreateEntityService<Entity = User | Evaluation | Client>(params: CreateEntityUsecase.Params): Promise<CreateEntityUsecase.Response<Entity>> {
    const { accessToken, entity, body } = params

    const response =  await (await HttpRepository.getInstance<Entity>()).request({
        url: `${variables.apiEndpoint}/${entity}`,
        method: 'POST',
        body: body,
        headers: { 'Authorization': `Bearer ${accessToken}` }
    })

    if (response.body.error) return new Error(response.body.error)

    return response.body.data
}