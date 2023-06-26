export class UnknownError extends Error {
    constructor () {
        super('Um erro desconhecido aconteceu, por favor tente novamente mais tarde.')
        this.name = 'UnknownError'
    }
}