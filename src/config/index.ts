import { setupAxios } from './axios'
import { testVariables } from './variables'
import { EnvironmentVariablesError } from '@errors'

export const setupApp = () => {
  const isEnvValid = testVariables()
  if (!isEnvValid) throw new EnvironmentVariablesError()

  setupAxios()

  return true
}

export * from './axios'
export * from './firebase'
export * from './variables'
