import { HandlerErrorService } from '../../application/services'
import { ReadDataContract, RemoveDataContract, StoreDataContract } from '../../domain/contracts'

import AsyncStorage from '@react-native-async-storage/async-storage'
import { EntityDoesntExistError } from '../../domain/errors'

export class LocalStorageRepository implements 
StoreDataContract,
ReadDataContract,
RemoveDataContract {
    public static readonly instance: LocalStorageRepository = new LocalStorageRepository()

    async storeData(params: StoreDataContract.Params): Promise<StoreDataContract.Response> {
        const { key, value } = params
        try {
            const treatedValue = JSON.stringify(value)
            await AsyncStorage.setItem(key, treatedValue)

            return true
        } catch(err: any) {
            return await HandlerErrorService(err.message ?? err.code)
        }
    }

    async readData(params: ReadDataContract.Params): Promise<ReadDataContract.Response> {
        const { key } = params
        try {
            const data = await AsyncStorage.getItem(key)  

            return data ? JSON.parse(data) : new EntityDoesntExistError(key)
        } catch(err: any) {
            return await HandlerErrorService(err.message ?? err.code)
        }
    }

    async removeData(params: RemoveDataContract.Params): Promise<RemoveDataContract.Response> {
        const { key } = params
        try {
            await AsyncStorage.removeItem(key)  

            return true
        } catch(err: any) {
            return await HandlerErrorService(err.message ?? err.code)
        }
    }
    
}