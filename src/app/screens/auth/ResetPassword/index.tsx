import { useAuth } from '../../../contexts'
import { Container, Text, Title } from './styles'
import { Button, CustomTextInput, Screen, Logo } from '../../../components'

import validator from 'validator'
import React, { useState } from 'react'
import Toast from 'react-native-toast-message'
import { TouchableOpacity } from 'react-native'

interface ResetPasswordScreenProps {
    navigation: any
}

export const ResetPasswordScreen = ({ navigation }: ResetPasswordScreenProps) => {
    const { resetPassword } = useAuth()
    const [isLoading, setLoading] = useState(false)

    const [email, setEmail] = useState('')
    const [isValidEmail, setIsValidEmail] = useState(true)
    

    const checkEmail = async (email: string) => {
        const isValid = validator.isEmail(email)
        setIsValidEmail(isValid)

        return isValid
    }
    
    const sendPasswordResetEmail = async () =>  {
        const emailIsValid = await checkEmail(email)

        if (emailIsValid) {
            setLoading(true)
            const response = await resetPassword(email)
            if (response instanceof Error) {
                Toast.show({ type: 'error', text1: response.message })
            }
            setLoading(false)
        }
    }

    return (
        <Screen background='gray'>
            <Logo/>
            <Container>
                <Title>Resetar Senha</Title>
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
                    action={sendPasswordResetEmail} 
                    text='Enviar' 
                    isDisabled={isLoading}
                    isLoading={isLoading}
                />
            </Container>
            <Text isLink={false}>
                    Senha Resetada? Faça<TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text isLink={true}>Login</Text>
                </TouchableOpacity>
            </Text>
        </Screen>
    )
}