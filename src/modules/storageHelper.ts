import AsyncStorage from '@react-native-async-storage/async-storage'

interface StorageProps {
    key: string
    value?: any
}

export async function store({ key, value }: StorageProps): Promise<void> {
    try {
        return await AsyncStorage.setItem(key, JSON.stringify(value))
    } catch(err: any) {
        console.error(err)
    }
}

export async function read({ key }: StorageProps): Promise<any | undefined> {
    try {
        const value = await AsyncStorage.getItem(key)
        if (value) return JSON.parse(value)

        return undefined
    } catch(err: any) {
        console.error(err)

        return null
    }
}

export async function remove({ key }: StorageProps): Promise<void> {
    try {
        return await AsyncStorage.removeItem(key) 
    } catch(err: any) {
        console.error(err)
    }
}