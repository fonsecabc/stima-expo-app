import { setupAxios } from './axios'
import { testVariables } from './variables'
import { EnvironmentVariablesError } from '../types/errors'

export const setupApp = () => {
    const isEnvValid = testVariables()
    if (!isEnvValid) throw new EnvironmentVariablesError()

    setupAxios()
}