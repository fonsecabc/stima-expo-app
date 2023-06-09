import { QueryOperators } from '../enums'

export interface GetQuery {
    param: string
    operator: QueryOperators
    comparison: string
}
