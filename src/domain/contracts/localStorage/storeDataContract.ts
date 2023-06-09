export interface StoreDataContract {
    storeData: (params: StoreDataContract.Params) => Promise<StoreDataContract.Response>
}

export namespace StoreDataContract {
    export type Params = {
        key: string
        value: any
    }

    export type Response = true | Error
}