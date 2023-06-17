import { TextInputContainer, TextInput, HideIcon } from './styles'

import React, { useState } from 'react'
import { EyeIcon, EyeSlashIcon } from 'react-native-heroicons/outline'

interface CustomTextInputProps {
    value: any
    setValueAction: any
    isValid?: boolean
    isSecured?: true
    isRequired: boolean
    placeholder: string
    contentType?: 'emailAddress' | 'password'
}

export const CustomTextInput = (props: CustomTextInputProps) => {
    const { value, setValueAction, placeholder, isValid, isSecured, isRequired, contentType } = props

    const [hideText, setHideText] = useState(!!isSecured)
    const [isFocused, setFocus] = useState(false)

    return (
        <TextInputContainer isFocused={isFocused} isValid={isValid} isRequired={isRequired} behavior='padding'>
            <TextInput
                defaultValue={value}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
                placeholder={placeholder}
                clearButtonMode='while-editing'
                underlineColorAndroid='transparent'
                secureTextEntry={hideText ? true : false}
                onChangeText={(text) => setValueAction(text)}
                onSubmitEditing={() => setValueAction(value)}
                textContentType={contentType ? contentType : 'none'}
            />
            {isSecured && (
                <HideIcon onPress={() => setHideText(!hideText)}>
                    {hideText ? <EyeIcon size={20} /> : <EyeSlashIcon size={20} />}
                </HideIcon>
            )}
        </TextInputContainer>
    )
}
