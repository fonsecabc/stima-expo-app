export class UnknownError extends Error {
    constructor () {
        super('Um erro desconhecido ocorreu, tente novamente mais tarde')
        this.name = 'UnknownError'
    }
}