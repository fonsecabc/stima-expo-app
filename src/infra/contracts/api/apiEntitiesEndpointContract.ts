export interface ApiEntitiesEndpointContract {
    getEvaluationList(): (params: ApiEntitiesEndpointContract.GetEvaluationList.Params) => Promise<ApiEntitiesEndpointContract.GetEvaluationList.Response>

}

export namespace ApiEntitiesEndpointContract {
    export namespace GetEvaluationList {
        export type Params = {
            accessToken: string
        }

        export type Response = object[] | undefined
    }
}