import { useAuth } from '../../../contexts'
import { createUser } from '../../../../modules/requests'
import { Container, Text, TextSmall, Title } from './styles'
import { Button, CustomTextInput, Screen, Logo } from '../../../components'

import validator from 'validator'
import Toast from 'react-native-toast-message'
import React, { useState, useEffect } from 'react'

interface SignupScreenProps {
  navigation: any
}

export const SignupScreen = ({ navigation }: SignupScreenProps) => {
    const { login } = useAuth()
    const [isLoading, setLoading] = useState(false)

    const [email, setEmail] = useState('')
    const [isValidEmail, setIsValidEmail] = useState(true)

    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [isValidPassword, setIsValidPassword] = useState(true)
    const [passwordState, setPasswordState] = useState(0)
    const passwordsMatch = password === passwordConfirmation

    const checkPassword = async (password: string) => {
        if (password !== '') {
            const uniqueChars = [...new Set(password)]
            const hasSpecialCharacters = /[!@#$%^&*(),.?':{}|<>]/.test(password)

            let state = 1
            uniqueChars.length > 2 && password.length >= 4 && (state = 2)
            uniqueChars.length > 2 && password.length >= 8 && (state = 3)
            uniqueChars.length > 2 && password.length >= 8 && hasSpecialCharacters && (state = 4)
            setPasswordState(state)
            setIsValidPassword(state > 2 ? true : false)

            return isValidPassword
        } else {
            return true
        }
    }

    const checkEmail = async (email: string) => {
        const isValid = validator.isEmail(email)
        setIsValidEmail(isValid)

        return isValid
    }

    useEffect(() => {
        checkPassword(password)
        checkEmail(email)
    }, [password, email])

    const signupUser = async () => {
        const passwordIsValid = await checkPassword(password)
        const emailIsValid = await checkEmail(email)

        if (passwordIsValid && emailIsValid) {
            setLoading(true)
            let response
            response = await createUser(email, password, passwordConfirmation)
            if (response instanceof Error) {
                setLoading(false)
                return Toast.show({ type: 'error', text1: response.message })
            }
            response = await login(email, password)
            if (response instanceof Error) {
                setLoading(false)
                return Toast.show({ type: 'error', text1: response.message })
            }
            setLoading(false)
        }
    }

    return (
        <Screen background='gray'>
            <Logo />
            <Container>
                <Title>Crie sua conta</Title>
                <CustomTextInput
                    value={email}
                    isValid={email !== '' ? isValidEmail : true}
                    isRequired={true}
                    placeholder='Email'
                    contentType='emailAddress'
                    setValueAction={setEmail}
                />
                <CustomTextInput
                    value={password}
                    isValid={password !== '' ? isValidPassword : true}
                    isSecured={true}
                    isRequired={true}
                    placeholder='Senha'
                    contentType='password'
                    setValueAction={setPassword}
                />
                <TextSmall>
                    {passwordState === 1
                        ? 'Senha extremamente fraca'
                        : passwordState === 2
                            ? 'Senha fraca'
                            : passwordState === 3
                                ? 'Senha satisfatória'
                                : passwordState === 4
                                    ? 'Senha excelente'
                                    : ''}
                </TextSmall>
                <CustomTextInput
                    value={passwordConfirmation}
                    isValid={passwordsMatch}
                    isSecured={true}
                    isRequired={true}
                    placeholder='Confirme sua senha'
                    contentType='password'
                    setValueAction={setPasswordConfirmation}
                />
                <TextSmall>{!passwordsMatch && 'Senhas devem bater'}</TextSmall>
                <Button
                    style={{ marginTop: 25 }}
                    action={signupUser}
                    text='CRIAR'
                    isDisabled={isLoading}
                    isLoading={isLoading}
                />
                <Text isLink={false}>
                    Já tem conta?
                    <Text isLink={true} onPress={() => navigation.navigate('Login')}>Entre</Text>
                </Text>
            </Container>
        </Screen>
    )
}
