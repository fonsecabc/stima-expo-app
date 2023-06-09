export interface ReadDataContract {
    readData: (params: ReadDataContract.Params) => Promise<ReadDataContract.Response>
}

export namespace ReadDataContract {
    export type Params = {
        key: string
    }

    export type Response = object | Error
}