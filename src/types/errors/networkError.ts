export class NetworkError extends Error {
  constructor () {
    super('Sem conexão')
    this.name = 'NetworkError'
  }
}