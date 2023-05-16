import { QueryOperators } from '@/domain/enums'

export interface GetQuery {
    param: string
    operator: QueryOperators
    comparison: string
}
