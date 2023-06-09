import { User, Evaluation, Client } from '../../entities'

export namespace CreateEntityUsecase {
    export type Params = {
        accessToken?: string
        entity: 'user' | 'evaluation' | 'client' 
        body: object
    }

    export type Response<Entity = User | Evaluation | Client> = Entity | Error
}
