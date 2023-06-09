import { variables } from '../../../main/config'
import { UpdateEntityUsecase } from '../../../domain/usecases'
import { HttpRepository } from '../../../infra/repositories'

export async function UpdateEntityService(params: UpdateEntityUsecase.Params): Promise<UpdateEntityUsecase.Response> {
    const { accessToken, entity, uid, attrs } = params

    const response =  await (await HttpRepository.getInstance<true>()).request({
        url: `${variables.apiEndpoint}/${entity}`,
        method: 'PUT',
        body: { uid, attrs },
        headers: { 'Authorization': `Bearer ${accessToken}` }

    })

    if (response.body.error) return new Error(response.body.error)

    return response.body.data
}