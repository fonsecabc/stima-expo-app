import { User } from '@/domain/entities'
import { GetType } from '@/domain/enums'
import { LoadUserUsecase } from '@/domain/usecases'
import { HttpClientContract } from '@/domain/contracts'

export class LoadUserService implements LoadUserUsecase {
    constructor(
        private readonly axiosHttpRepository: HttpClientContract<User>,
        private readonly apiEndpoint: string
    ) { }

    async perform(params: LoadUserUsecase.Params): Promise<LoadUserUsecase.Response> {
        const { uid } = params
        const response = await this.axiosHttpRepository.request({
            url: `${this.apiEndpoint}/evaluation`,
            method: 'GET',
            body: { uid, type: GetType.ENTITY },
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (response.statusCode >= 200 && response.statusCode <= 299) return new Error(response.body.error)

        return response.body.data
    }
}
