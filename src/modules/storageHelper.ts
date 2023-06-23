import AsyncStorage from '@react-native-async-storage/async-storage'

interface StorageProps {
    key: string
    value: any
}

export async function store({ key, value }: StorageProps) {
    try {
        await AsyncStorage.setItem(key, value)
    } catch(err: any) {
        console.error(err)
    }
}

export async function read({ key }: StorageProps) {
    try {
        await AsyncStorage.getItem(key)
    } catch(err: any) {
        console.error(err)
    }
}

export async function remove({ key }: StorageProps) {
    try {
        await AsyncStorage.removeItem(key) 
    } catch(err: any) {
        console.error(err)
    }
}