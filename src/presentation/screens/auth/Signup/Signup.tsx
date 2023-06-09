import { styleSheet } from './StyleSheet'
import React, { useState, useEffect, useRef } from 'react'
import { Image, View, Text, TouchableOpacity } from 'react-native'
import { CreateUserService } from '../../../../application/services'
import { Button, CustomTextInput, Screen, Notification, Loader } from '../../../components'
import validator from 'validator'

interface SignupScreenProps {
    navigation: any
}

export const SignupScreen = (props: SignupScreenProps) => {
    const [email, setEmail] = useState('')
    const [isValidEmail, setIsValidEmail] = useState(true)
    
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const isValidPassword = useRef(true)
    const passwordState = useRef(0)
    const passwordsMatch = password === passwordConfirmation

    const [notification, showNotification] = useState(false)
    const [notificationText, setNotificationText] = useState('')

    const [isLoading, setLoading] = useState(false)

    function checkPassword(password: string) {
        const uniqueChars = [...new Set(password)]
        const hasSpecialCharacters = /[!@#$%^&*(),.?":{}|<>]/.test(password)

        let state = 1
        uniqueChars.length > 2 && password.length >= 4 && (state = 2)
        uniqueChars.length > 2 && password.length >= 8 && (state = 3)
        uniqueChars.length > 2 && password.length >= 8 && hasSpecialCharacters && (state = 4)
        passwordState.current = state
        
        return state > 2 ? true : false
    }

    useEffect(() => {
        const state = checkPassword(password)
        isValidPassword.current = state
    }, [password])

    async function SignupUser() {
        const passwordIsValid = checkPassword(password)
        const emailIsValid = validator.isEmail(email)

        setIsValidEmail(emailIsValid)
        if (passwordIsValid  && emailIsValid) {
            setLoading(true)
            const isCreated = await CreateUserService({ email, password, passwordConfirmation })
            setLoading(false)
            if (isCreated instanceof Error) {
                setNotificationText(isCreated.message)
                showNotification(true)
                console.log(isCreated.message)
            }
        } 
    }

    return (
        <Screen background='gray'>
            {notification && <Notification text={notificationText} type={'error'}/>}
            {isLoading && <Loader/>}
            <Image style={styleSheet.image} source={require('../../../public/logo-gradient.png')} />
            <View style={[styleSheet.container]}>
                <Text style={styleSheet.title}>Crie sua conta</Text>
                <CustomTextInput 
                    const={email}
                    isValid={isValidEmail}
                    isRequired={true}
                    placeholder='Email'
                    contentType='emailAddress'
                    setConstAction={setEmail}
                />
                <CustomTextInput 
                    const={password}
                    isValid={isValidPassword.current}
                    isSecured={true}
                    isRequired={true}
                    placeholder='Senha'
                    contentType='password'
                    setConstAction={setPassword}
                />
                <View style={styleSheet.passwordValidatorContainer}>
                    <View style={[ styleSheet.passwordValidator, passwordState.current >= 1 && styleSheet.passwordValidator1 ]}/>
                    <View style={[ styleSheet.passwordValidator, passwordState.current >= 2 && styleSheet.passwordValidator2 ]}/>
                    <View style={[ styleSheet.passwordValidator, passwordState.current >= 3 && styleSheet.passwordValidator3 ]}/>
                    <View style={[ styleSheet.passwordValidator, passwordState.current >= 4 && styleSheet.passwordValidator4 ]}/>
                </View>
                <Text style={[styleSheet.smText]}>
                    {passwordState.current === 1 && 'Extremamente fraca'}
                    {passwordState.current === 2 && 'Fraca'}
                    {passwordState.current === 3 && 'Satisfatória'}
                    {passwordState.current === 4 && 'Excelente'}
                </Text>
                <CustomTextInput 
                    const={passwordConfirmation}
                    isValid={passwordsMatch}
                    isSecured={true}
                    isRequired={true}
                    placeholder='Confirme sua senha'
                    contentType='password'
                    setConstAction={setPasswordConfirmation}
                />
                <Text style={[styleSheet.smText]}>
                    {!passwordsMatch && 'Senhas devem bater'}
                </Text>
                <Button style={{ marginTop: 25 }} action={SignupUser} text='Criar' isDisabled={false}/>
                <Text style={styleSheet.text}>
                    Já tem conta? <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
                        <Text style={styleSheet.link}>Entre</Text>
                    </TouchableOpacity>
                </Text>
            </View>
        </Screen>
    )
}