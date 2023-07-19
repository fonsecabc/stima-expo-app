export class EnvironmentVariablesError extends Error {
  constructor () {
    super('Variáveis de ambiente inválidas')
    this.name = 'EnvironmentVariablesError'
  }
}