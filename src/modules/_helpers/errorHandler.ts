import { 
  EntityDoesntExistError,
  InvalidParamError,
  NetworkError,
  UnknownError, 
  UserAlreadyExistsError
} from '../../types/errors'

export const ErrorMap: Map<string, Error> = new Map([
  ['User already exists!!', new UserAlreadyExistsError()],
  ['Firebase: Error (auth/invalid-email).', new InvalidParamError('Email')],
  ['Firebase: Error (auth/user-not-found).', new EntityDoesntExistError('Usuário com esse email')],
  ['Network Error', new NetworkError()],
  ['No connection!!', new NetworkError()],
  ['Unknown error happened, please try again soon!!', new UnknownError()],
  ['The method specified in the request is not allowed!!', new UnknownError()],
  ['Error when loading enviroment variables!!', new UnknownError()],
])

export const treatError = (error: any): Error => {
  const message = error.message ?? error.code ?? error ?? ''

  if (message.startsWith('Invalid param: ')) {
    const param = message.replace('Invalid param: ', '')
    return new InvalidParamError(param.charAt(0).toUpperCase() + param.slice(1))
  }

  if (message.endsWith('not found!!')) {
    const param = message.replace('Informed ', '').replace(' not found!!', '')
    return new EntityDoesntExistError(param.charAt(0).toUpperCase() + param.slice(1))
  }
 
  return ErrorMap.get(message) ?? logError(message)
}

export const logError = (error: string): Error => {
  console.error(error)
  return new UnknownError()
}