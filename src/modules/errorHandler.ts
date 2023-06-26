import { 
    EntityDoesntExistError,
    InvalidParamError,
    NetworkError,
    UnknownError, 
} from '../types/errors'
import { UserAlreadyExistsError } from '../types/errors/userAlreadyExists'

export const ErrorMap: Map<string, Error> = new Map([
    ['User already exists!!', new UserAlreadyExistsError()],
    ['Network Error', new NetworkError()],
    ['No connection!!', new NetworkError()],
    ['Unknown error happened, please try again soon!!', new UnknownError()],
    ['The method specified in the request is not allowed!!', new UnknownError()],
    ['Error when loading enviroment variables!!', new UnknownError()],
])

export const treatError = (error: string): Error => {
    if (error.startsWith('Invalid param: ')) {
        const param = error.replace('Invalid param: ', '')
        return new InvalidParamError(param.charAt(0).toUpperCase() + param.slice(1))
    }

    if (error.endsWith('not found!!')) {
        const param = error.replace('Informed ', '').replace(' not found!!', '')
        return new EntityDoesntExistError(param.charAt(0).toUpperCase() + param.slice(1))
    }
 
    return ErrorMap.get(error) ?? logError(error)
}

export const logError = (error: string): Error => {
    console.error(error)
    return new UnknownError()
}