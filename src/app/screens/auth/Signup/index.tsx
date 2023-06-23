import { AlertContext } from '../../../contexts/AlertProvider'
import { Button, CustomTextInput, Screen, Logo } from '../../../components'

import validator from 'validator'
import React, { useState, useEffect, useContext } from 'react'
import { Container, Text, TextSmall, Title } from './styles'

interface SignupScreenProps {
  navigation: any
}

export const SignupScreen = ({ navigation }: SignupScreenProps) => {
    const [email, setEmail] = useState('')
    const [isValidEmail, setIsValidEmail] = useState(true)

    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [isValidPassword, setIsValidPassword] = useState(true)
    const [passwordState, setPasswordState] = useState(0)
    const passwordsMatch = password === passwordConfirmation

    const { pushNewAlert } = useContext(AlertContext)

    const [isLoading, setLoading] = useState(false)

    function checkPassword(password: string) {
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

    function checkEmail(email: string) {
        const isValid = validator.isEmail(email)
        setIsValidEmail(isValid)

        return isValid
    }

    useEffect(() => {
        checkPassword(password)
        checkEmail(email)
    }, [password, email])

    const signupUser = () => {
        const passwordIsValid = checkPassword(password)
        const emailIsValid = checkEmail(email)

        if (passwordIsValid && emailIsValid) {
            //setLoading(true)
            //const response = await CreateEntityService({ entity: 'user', body: { email, password, passwordConfirmation } })
            //setLoading(false)
            //if (response instanceof Error) {
            //    pushNewAlert({ message: response.message, type: 'error'})
            //}
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
