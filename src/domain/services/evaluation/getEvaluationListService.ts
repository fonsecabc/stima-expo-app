import { GetEvaluationListUsecase } from '@/domain/usecases'
import { ApiEntitiesEndpointRepository } from '@/infra/repositories'

export class GetEvaluationListService implements GetEvaluationListUsecase {
    constructor(
        private readonly apiEntitiesEndpoint: ApiEntitiesEndpointRepository,
    ) { }

    async getList(params: GetEvaluationListUsecase.Params): Promise<GetEvaluationListUsecase.Response> {
        const { accessToken } = params
        const evaluationList = await this.apiEntitiesEndpoint.getEvaluationList({ accessToken })

        return evaluationList
    }
}
