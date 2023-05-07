import { GetUserUsecase } from '@/domain/usecases'
import { ApiEntitiesEndpointRepository } from '@/infra/repositories'

export class GetUserService implements GetUserUsecase {
    constructor(
        private readonly apiEntitiesEndpoint: ApiEntitiesEndpointRepository,
    ) { }

    async getUser(params: GetUserUsecase.Params): Promise<GetUserUsecase.Response> {
        const { accessToken } = params
        const user = await this.apiEntitiesEndpoint.getUser({ accessToken })

        return user
    }
}
