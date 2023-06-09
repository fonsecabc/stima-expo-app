import { ErrorMap } from '../../../domain/entities'
import { UnknownError } from '../../../domain/errors'
import { HandleErrorUsecase } from '../../../domain/usecases'

export async function HandlerErrorService(params: HandleErrorUsecase.Params): Promise<HandleErrorUsecase.Response> {
    const err = params 
    const error = ErrorMap.get(err)
    
    if (error) return error
    
    console.log(err)
    return new UnknownError()
}
