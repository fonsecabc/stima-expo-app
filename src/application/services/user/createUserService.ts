import { User } from '@/domain/entities'
import { CreateUserUsecase } from '@/domain/usecases'
import { HttpClientContract } from '@/domain/contracts'

export class CreateUserService implements CreateUserUsecase {
    constructor(
        private readonly axiosHttpRepository: HttpClientContract<User>,
        private readonly apiEndpoint: string
    ) { }

    async perform(params: CreateUserUsecase.Params): Promise<CreateUserUsecase.Response> {
        const { email, password, passwordConfirmation } = params
        const response = await this.axiosHttpRepository.request({
            url: `${this.apiEndpoint}/user`,
            method: 'POST',
            body: { email, password, passwordConfirmation },
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (response.statusCode >= 200 && response.statusCode <= 299) return new Error(response.body.error)

        return response.body.data
    }
}
