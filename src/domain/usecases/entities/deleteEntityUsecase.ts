export namespace DeleteEntityUsecase {
    export type Params = {
        accessToken?: string
        entity: 'user' | 'evaluation' | 'client' 
        uid: string
    }

    export type Response = true | Error
}
