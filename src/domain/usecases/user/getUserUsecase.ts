import { User } from '@/domain/entities'

export interface GetUserUsecase {
    getUser: (params: GetUserUsecase.Params) => Promise<GetUserUsecase.Response>
}
export namespace GetUserUsecase {
    export type Params = {
        accessToken: string
    }

    export type Response = User | undefined
}
