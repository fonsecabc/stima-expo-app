export interface SendResetPasswordEmailContract {
    SendResetPasswordEmail: (params: SendResetPasswordEmailContract.Params) => Promise<SendResetPasswordEmailContract.Response>
}

export namespace SendResetPasswordEmailContract {
    export type Params = {
        email: string
    }

    export type Response = true | Error
}