import { EvaluationListObject, ClientListObject } from '@/domain/entities'

export interface ApiEntitiesEndpointContract {
    getEvaluationList(): (params: ApiEntitiesEndpointContract.GetEvaluationList.Params) => Promise<ApiEntitiesEndpointContract.GetEvaluationList.Response>
    getClientList(): (params: ApiEntitiesEndpointContract.GetClientList.Params) => Promise<ApiEntitiesEndpointContract.GetClientList.Response>

}

export namespace ApiEntitiesEndpointContract {
    export namespace GetEvaluationList {
        export type Params = {
            accessToken: string
        }

        export type Response = EvaluationListObject[] | undefined
    }
    export namespace GetClientList {
        export type Params = {
            accessToken: string
        }

        export type Response = ClientListObject[] | undefined
    }
}