export class InvalidParamError extends Error {
    constructor (param: string) {
        super(`${param} inválido`)
        this.name = 'InvalidParamError'
    }
}