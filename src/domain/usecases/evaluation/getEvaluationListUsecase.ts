import { EvaluationListObject } from '@/domain/entities'

export interface GetEvaluationListUsecase {
    getList: (params: GetEvaluationListUsecase.Params) => Promise<GetEvaluationListUsecase.Response>
}
export namespace GetEvaluationListUsecase {
    export type Params = {
        accessToken: string
    }

    export type Response = EvaluationListObject[] | undefined
}
