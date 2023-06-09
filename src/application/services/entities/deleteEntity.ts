import { variables } from '../../../main/config'
import { DeleteEntityUsecase } from '../../../domain/usecases'
import { HttpRepository } from '../../../infra/repositories'

export async function DeleteEntityService(params: DeleteEntityUsecase.Params): Promise<DeleteEntityUsecase.Response> {
    const { accessToken, entity, uid } = params

    const response =  await (await HttpRepository.getInstance<true>()).request({
        url: `${variables.apiEndpoint}/${entity}`,
        method: 'DELETE',
        body: { uid },
        headers: { 'Authorization': `Bearer ${accessToken}` }
    })

    if (response.body.error) return new Error(response.body.error)

    return response.body.data
}