import { CreateUserUsecase } from '../../../domain/usecases'
import { User } from '../../../domain/entities'
import { HttpRepository } from '../../../infra/repositories'
import { variables } from '../../../main/config'

export async function CreateUserService(params: CreateUserUsecase.Params): Promise<CreateUserUsecase.Response> {
    const { email, password, passwordConfirmation  } = params

    const response =  await (await HttpRepository.getInstance<User>()).request({
        url: `${variables.apiEndpoint}/user`,
        method: 'POST',
        body: { email, password, passwordConfirmation }
    })

    if (response.body.error) return new Error(response.body.error)

    return response.body.data
}
