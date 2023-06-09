export namespace LoginUserUsecase {
    export type Params = {
        email: string
        password: string
    }

    export type Response = true | Error
}
