import { User } from '@/domain/entities'

export interface CreateUserUsecase {
    perform(params: CreateUserUsecase.Params): Promise<CreateUserUsecase.Response>
}
export namespace CreateUserUsecase {
    export type Params = {
        email: string
        password: string
        passwordConfirmation: string
    }

    export type Response = User | Error
}
