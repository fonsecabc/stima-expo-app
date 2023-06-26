import { useAuth } from '../../../contexts'
import { Container, Text, Title } from './styles'
import { Button, CustomTextInput, Screen, Logo } from '../../../components'

import validator from 'validator'
import React, { useState } from 'react'
import Toast from 'react-native-toast-message'
import { TouchableOpacity } from 'react-native'

interface LoginScreenProps {
    navigation: any
}

export const LoginScreen = ({ navigation }: LoginScreenProps) => {
    const { login } = useAuth()
    const [isLoading, setLoading] = useState(false)

    const [email, setEmail] = useState('')
    const [isValidEmail, setIsValidEmail] = useState(true)

    const [password, setPassword] = useState('')
    const [isValidPassword, setIsValidPassword] = useState(true)

    const checkPassword = async (password: string) => {
        const uniqueChars = [...new Set(password)]
        const isValid = uniqueChars.length > 2 && password.length >= 8
        setIsValidPassword(isValid)

        return isValid
    }

    const checkEmail = async (email: string) => {
        const isValid = validator.isEmail(email)
        setIsValidEmail(isValid)

        return isValid
    }

    const loginUser = async () => {
        const passwordIsValid = await checkPassword(password)
        const emailIsValid = await checkEmail(email)

        if (emailIsValid && passwordIsValid) {
            setLoading(true)
            const response = await login(email, password)
            if (response instanceof Error) {
                Toast.show({ type: 'error', text1: response.message })
            }
            setLoading(false)
        }
    }

    return (
        <Screen background='gray'>
            <Logo />
            <Container>
                <Title>Login</Title>
                <CustomTextInput
                    value={email}
                    isValid={isValidEmail}
                    isRequired={true}
                    placeholder='Email'
                    contentType='emailAddress'
                    setValueAction={setEmail}
                />
                <CustomTextInput
                    value={password}
                    isValid={isValidPassword}
                    isSecured={true}
                    isRequired={true}
                    placeholder='Senha'
                    contentType='password'
                    setValueAction={setPassword}
                />
                <Button
                    style={{ marginTop: 25 }}
                    action={loginUser}
                    text='ENTRAR'
                    isDisabled={isLoading}
                    isLoading={isLoading}
                />
                <Text isLink={false}>
                    Novo usuário?
                    <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                        <Text isLink={true}>Cadastrar</Text>
                    </TouchableOpacity>
                </Text>
            </Container>
            <Text isLink={false}>
                Esqueceu a senha?
                <TouchableOpacity onPress={() => navigation.navigate('ResetPassword')}>
                    <Text isLink={true}>Resetar</Text>
                </TouchableOpacity>
            </Text>
        </Screen>
    )
}
