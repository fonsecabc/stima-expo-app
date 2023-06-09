import React, { useState } from 'react'
import { styleSheet } from './StylesSheet'
import { TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native'
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline'

interface SearchBarProps {
    list: any
    placeholder: string
}

export const SearchBar = (props: SearchBarProps) => {
    const [searchText, setSearchText] = useState('')
    
    function search(searchText: string) {
        console.log(searchText)
        return undefined
    }

    return (
        <KeyboardAvoidingView 
            style={[styleSheet.container]}
            behavior='padding'
        >
            <TextInput 
                style={styleSheet.textInput} 
                placeholder={props.placeholder}
                onChangeText={searchText => setSearchText(searchText)}
                defaultValue={searchText}
                onSubmitEditing={() => search(searchText)}
                underlineColorAndroid="transparent"
                clearButtonMode="while-editing"
            />
            <TouchableOpacity style={styleSheet.icon} onPress={() => search(searchText)}>
                <MagnifyingGlassIcon size={30}/>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    )
}

