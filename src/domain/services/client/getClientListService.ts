import { GetClientListUsecase } from '@/domain/usecases'
import { ApiEntitiesEndpointRepository } from '@/infra/repositories'

export class GetClientListService implements GetClientListUsecase {
    constructor(
        private readonly apiEntitiesEndpoint: ApiEntitiesEndpointRepository,
    ) { }

    async getList(params: GetClientListUsecase.Params): Promise<GetClientListUsecase.Response> {
        const { accessToken } = params
        const ClientList = await this.apiEntitiesEndpoint.getClientList({ accessToken })

        return ClientList
    }
}
