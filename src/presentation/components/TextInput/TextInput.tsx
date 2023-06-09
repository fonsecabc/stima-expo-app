import React, { useState } from 'react'
import { styleSheet } from './StylesSheet'
import { TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import { EyeIcon, EyeSlashIcon } from 'react-native-heroicons/outline'

interface CustomTextInputProps {
    const: any
    setConstAction: any
    isValid?: boolean
    isSecured?: true
    isRequired: boolean
    placeholder: string
    contentType?: 'emailAddress' | 'password'
}

export const CustomTextInput = (props: CustomTextInputProps) => {
    const [hideText, setHideText] = useState(!!props.isSecured)
    const [isFocused, setFocus] = useState(false)

    return (
        <KeyboardAvoidingView 
            style={[
                styleSheet.container, 
                isFocused && styleSheet.validTextInput,
                (!props.isValid && props.isRequired) && styleSheet.invalidTextInput,
            ]}
            behavior='padding'
        >
            <TextInput 
                defaultValue={props.const}
                style={styleSheet.textInput } 
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
                placeholder={props.placeholder}
                clearButtonMode='while-editing'
                underlineColorAndroid='transparent'
                secureTextEntry={hideText ? true : false }
                onChangeText={text => props.setConstAction(text)}
                onSubmitEditing={() => props.setConstAction(props.const)}
                textContentType={props.contentType ? props.contentType : 'none' }
                
            />
            {props.isSecured && (
                <TouchableOpacity style={styleSheet.icon} onPress={() => setHideText(!hideText)}>
                    {hideText ? <EyeIcon size={20}/> :  <EyeSlashIcon size={20}/>}
                </TouchableOpacity>
            )}
        </KeyboardAvoidingView>
    )
}

