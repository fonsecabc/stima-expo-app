import { AlertContext } from '../../../contexts/AlertProvider'
import { Container, Text, Title } from './styles'
import { Button, CustomTextInput, Screen, Logo } from '../../../components'

import validator from 'validator'
import { TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'

interface ResetPasswordScreenProps {
    navigation: any
}

export const ResetPasswordScreen = ({ navigation }: ResetPasswordScreenProps) => {
    const [email, setEmail] = useState('')
    const [isValidEmail, setIsValidEmail] = useState(true)
    
    const [isLoading, setLoading] = useState(false)

    const { pushNewAlert } = useContext(AlertContext)

    const checkEmail = (email: string) => {
        const isValid = validator.isEmail(email)
        setIsValidEmail(isValid)

        return isValid
    }
    
    const resetPassword = () =>  {
        const emailIsValid = checkEmail(email)

        if (emailIsValid) {
            //setLoading(true)
            //const response = await ResetPasswordService({ email })
            //setLoading(false)
            //if (response instanceof Error) {
            //    pushNewAlert({ message: response.message, type: 'error' })
            //}
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
                    action={resetPassword} 
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