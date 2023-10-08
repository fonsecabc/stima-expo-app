import { 
  EntityDoesntExistError,
  InvalidParamError,
  NetworkError,
  UnknownError, 
  UserAlreadyExistsError
} from '@errors'

import Toast from 'react-native-toast-message'

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
  console.error(error)

  if (message.startsWith('Invalid param: ')) {
    const param = message.replace('Invalid param: ', '')

    error = new InvalidParamError(param.charAt(0).toUpperCase() + param.slice(1))

  } else if (message.endsWith('not found!!')) {
    const param = message.replace('Informed ', '').replace(' not found!!', '')

    error = new EntityDoesntExistError(param.charAt(0).toUpperCase() + param.slice(1))
  } else {
    error = ErrorMap.get(message) ?? logError(message)
  }
 
  Toast.show({ type: 'error', text1: error.message })
  
  return error 
}

export const logError = (error: string): Error => {
  console.error(error)
  return new UnknownError()
}