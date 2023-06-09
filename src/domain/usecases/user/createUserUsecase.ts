import { User } from '../../entities'

export namespace CreateUserUsecase {
    export type Params = {
        email: string
        password: string
        passwordConfirmation: string
    }

    export type Response = User | Error
}
