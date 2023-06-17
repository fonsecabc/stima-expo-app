import { styleSheet } from './StyleSheet'
import { AlertContext } from '../../../contexts'
import { CreateEntityService } from '../../../../application/services'
import { Button, CustomTextInput, Screen, Logo } from '../../../components'
import validator from 'validator'
import React, { useState, useEffect, useContext } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

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
    })

    async function SignupUser() {
        const passwordIsValid = checkPassword(password)
        const emailIsValid = checkEmail(email)

        if (passwordIsValid && emailIsValid) {
            setLoading(true)
            const response = await CreateEntityService({ entity: 'user', body: { email, password, passwordConfirmation } })
            setLoading(false)
            if (response instanceof Error) {
                pushNewAlert(response.message, 'error')
            }
        }
    }

    return (
        <Screen background='gray'>
            <Logo />
            <View style={[styleSheet.container]}>
                <Text style={styleSheet.title}>Crie sua conta</Text>
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
                <View style={styleSheet.passwordValidatorContainer}>
                    <View style={[styleSheet.passwordValidator, passwordState >= 1 && styleSheet.passwordValidator1]} />
                    <View style={[styleSheet.passwordValidator, passwordState >= 2 && styleSheet.passwordValidator2]} />
                    <View style={[styleSheet.passwordValidator, passwordState >= 3 && styleSheet.passwordValidator3]} />
                    <View style={[styleSheet.passwordValidator, passwordState >= 4 && styleSheet.passwordValidator4]} />
                </View>
                <Text style={[styleSheet.smText]}>
                    {`${
                        passwordState === 1
                            ? 'Extremamente fraca'
                            : passwordState === 2
                                ? 'Fraca'
                                : passwordState === 3
                                    ? 'Satisfatória'
                                    : passwordState === 4
                                        ? 'Excelente'
                                        : ''
                    }`}
                </Text>
                <CustomTextInput
                    value={passwordConfirmation}
                    isValid={passwordsMatch}
                    isSecured={true}
                    isRequired={true}
                    placeholder='Confirme sua senha'
                    contentType='password'
                    setValueAction={setPasswordConfirmation}
                />
                <Text style={[styleSheet.smText]}>{!passwordsMatch && 'Senhas devem bater'}</Text>
                <Button
                    style={{ marginTop: 25 }}
                    action={SignupUser}
                    text='CRIAR'
                    isDisabled={isLoading}
                    isLoading={isLoading}
                />
                <Text style={styleSheet.text}>
          Já tem conta?{' '}
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text style={styleSheet.link}>Entre</Text>
                    </TouchableOpacity>
                </Text>
            </View>
        </Screen>
    )
}
