export interface RemoveDataContract {
    removeData(params: RemoveDataContract.Params): Promise<RemoveDataContract.Response>
}

export namespace RemoveDataContract {
    export type Params = {
        key: string
    }

    export type Response = true | Error
}