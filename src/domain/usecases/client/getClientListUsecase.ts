import { ClientListObject } from '@/domain/entities'

export interface GetClientListUsecase {
    getList: (params: GetClientListUsecase.Params) => Promise<GetClientListUsecase.Response>
}
export namespace GetClientListUsecase {
    export type Params = {
        accessToken: string
    }

    export type Response = ClientListObject[] | undefined
}
