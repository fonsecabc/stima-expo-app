import { styleSheet } from './StyleSheet'
import React, { ReactNode, useContext, useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { ResetPasswordService } from '../../../../application/services'
import { Button, CustomTextInput, Screen, Logo } from '../../../components'
import validator from 'validator'
import { AlertContext } from '../../../contexts'

interface ResetPasswordScreenProps {
    navigation: any
    children: ReactNode
}

export const ResetPasswordScreen = (props: ResetPasswordScreenProps) => {
    const [email, setEmail] = useState('')
    const [isValidEmail, setIsValidEmail] = useState(true)
    
    const [isLoading, setLoading] = useState(false)

    const { pushNewAlert } = useContext(AlertContext)

    function checkEmail(email: string) {
        const isValid = validator.isEmail(email)
        setIsValidEmail(isValid)

        return isValid
    }
    
    async function SendResetPasswordEmail() {
        const emailIsValid = checkEmail(email)

        if (emailIsValid) {
            setLoading(true)
            const response = await ResetPasswordService({ email })
            setLoading(false)
            if (response instanceof Error) {
                pushNewAlert(response.message, 'error')
            }
        }
    }

    return (
        <Screen background='gray'>
            <Logo/>
            <View style={[styleSheet.container]}>
                <Text style={styleSheet.title}>Resetar Senha</Text>
                <CustomTextInput 
                    value={email}
                    isValid={isValidEmail}
                    isRequired={true}
                    placeholder='Email'
                    contentType='emailAddress'
                    setValueAction={setEmail}
                />
                <Button 
                    style={{ marginTop: 25 }} 
                    action={SendResetPasswordEmail} 
                    text='Enviar' 
                    isDisabled={isLoading}
                    isLoading={isLoading}
                />
            </View>
            <Text style={[styleSheet.text]}>
                    Senha Resetada? Faça <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
                    <Text style={styleSheet.link}>Login</Text>
                </TouchableOpacity>
            </Text>
        </Screen>
    )
}