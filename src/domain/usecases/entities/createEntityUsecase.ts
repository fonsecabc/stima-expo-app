import { Entity } from '../../entities'

export namespace CreateEntityUsecase {
    export type Params = {
        accessToken?: string
        entity: 'user' | 'evaluation' | 'client' 
        body: object
    }

    export type Response = Entity | Error
}
