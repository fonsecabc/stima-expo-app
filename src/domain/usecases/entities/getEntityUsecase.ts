import { GetType } from '../../enums'
import { GetQuery } from '../../entities'

export namespace GetEntityUsecase {
    export type Params = {
        accessToken?: string
        entity: 'user' | 'evaluation' | 'client' 
        type: GetType
        uid?: string
        query?: GetQuery
        userUid?: string
    }

    export type Response<Entity = any> = Entity | Error
}
