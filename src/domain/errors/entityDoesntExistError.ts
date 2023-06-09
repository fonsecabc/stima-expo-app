export class EntityDoesntExistError extends Error {
    constructor (entity: string) {
        super(`${entity} não existe`)
        this.name = 'EntityDoesntExistError'
    }
}