export namespace UpdateEntityUsecase {
    export type Params = {
        accessToken?: string
        entity: 'user' | 'evaluation' | 'client' 
        uid: string
        attrs: object
    }

    export type Response = true | Error
}
