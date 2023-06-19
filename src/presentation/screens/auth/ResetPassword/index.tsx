import { AlertContext } from '../../../contexts'
import { Container, Text, Title } from './styles'
import { ResetPasswordService } from '../../../../application/services'
import { Button, CustomTextInput, Screen, Logo } from '../../../components'

import validator from 'validator'
import { TouchableOpacity } from 'react-native'
import React, { ReactNode, useContext, useState } from 'react'

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
                    action={SendResetPasswordEmail} 
                    text='Enviar' 
                    isDisabled={isLoading}
                    isLoading={isLoading}
                />
            </Container>
            <Text isLink={false}>
                    Senha Resetada? Faça<TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
                    <Text isLink={true}>Login</Text>
                </TouchableOpacity>
            </Text>
        </Screen>
    )
}