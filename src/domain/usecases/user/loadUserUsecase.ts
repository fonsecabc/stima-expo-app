import { User } from '@/domain/entities'

export interface LoadUserUsecase {
    perform(params: LoadUserUsecase.Params): Promise<LoadUserUsecase.Response>
}
export namespace LoadUserUsecase {
    export type Params = {
        uid: string
    }

    export type Response = User | Error
}
