export namespace ResetPasswordUsecase {
    export type Params = {
        email: string
    }

    export type Response = true | Error
}
