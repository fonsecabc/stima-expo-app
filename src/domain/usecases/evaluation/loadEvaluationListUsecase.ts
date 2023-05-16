import { EvaluationListObject } from '@/domain/entities'

export interface LoadEvaluationListUsecase {
    perform(params: LoadEvaluationListUsecase.Params): Promise<LoadEvaluationListUsecase.Response>
}
export namespace LoadEvaluationListUsecase {
    export type Params = {
        accessToken: string
        userUid: string
    }

    export type Response = EvaluationListObject[] | Error
}
