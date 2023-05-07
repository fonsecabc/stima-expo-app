import { ApiEntitiesEndpointContract } from '@/infra/contracts'

export class ApiEntitiesEndpointRepository implements ApiEntitiesEndpointContract {
    constructor() { }

    async getEvaluationList(params: ApiEntitiesEndpointContract.GetEvaluationList.Params): Promise<ApiEntitiesEndpointContract.GetEvaluationList.Response> {
        const { accessToken } = params
        return [{ 'accessToken': accessToken }]

    }

    async getClientList(params: ApiEntitiesEndpointContract.GetClientList.Params): Promise<ApiEntitiesEndpointContract.GetClientList.Response> {
        const { accessToken } = params
        return [{ 'accessToken': accessToken }]

    }

    async getUser(params: ApiEntitiesEndpointContract.GetUser.Params): Promise<ApiEntitiesEndpointContract.GetUser.Response> {
        const { accessToken } = params
        return [{ 'accessToken': accessToken }]

    }
}