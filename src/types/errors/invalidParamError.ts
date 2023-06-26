export class InvalidParamError extends Error {
    constructor (param: string) {
        super(`${param} inválido(a).`)
        this.name = 'InvalidParamError'
    }
}