import { styleSheet } from './StyleSheet'
import React, { ReactNode, useState } from 'react'
import { Image, View, Text, TouchableOpacity } from 'react-native'
import { LoginUserService } from '../../../../application/services'
import { Button, CustomTextInput, Screen, Notification, Loader } from '../../../components'
import validator from 'validator'

interface LoginScreenProps {
    navigation: any
    children: ReactNode
}

export const LoginScreen = (props: LoginScreenProps) => {
    const [email, setEmail] = useState('')
    const [isValidEmail, setIsValidEmail] = useState(true)
    
    const [password, setPassword] = useState('')
    const [isValidPassword, setisValidPassword] = useState(true)
    
    const [isLoading, setLoading] = useState(false)

    const [notification, showNotification] = useState(false)
    const [notificationText, setNotificationText] = useState('')

    function checkPassword(password: string) {
        const uniqueChars = [...new Set(password)]
        const isValid = uniqueChars.length > 2 && password.length >= 8
        setisValidPassword(isValid)

        return isValid
    }

    function checkEmail(email: string) {
        const isValid = validator.isEmail(email)
        setIsValidEmail(isValid)

        return isValid
    }
    
    async function LoginUser() {
        const passwordIsValid = checkPassword(password)
        const emailIsValid = checkEmail(email)

        if (emailIsValid && passwordIsValid) {
            setLoading(true)
            const isLoggedIn = await LoginUserService({ email, password })
            setLoading(false)
            if (isLoggedIn instanceof Error) {
                setNotificationText(isLoggedIn.message)
                showNotification(true)
                console.log(isLoggedIn.message)
            }
        }
    }

    return (
        <Screen background='gray'>
            {notification && <Notification text={notificationText} type={'error'}/>}
            {isLoading && <Loader/>}
            <Image style={styleSheet.image} source={require('../../../public/logo-gradient.png')} />
            <View style={[styleSheet.container]}>
                <Text style={styleSheet.title}>Login</Text>
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
                    isValid={isValidPassword}
                    isSecured={true}
                    isRequired={true}
                    placeholder='Senha'
                    contentType='password'
                    setConstAction={setPassword}
                />
                <Button style={{ marginTop: 25 }} action={LoginUser} text='Entrar' isDisabled={false}/>
                <Text style={[styleSheet.text]}>
                    Novo usuário? <TouchableOpacity onPress={() => props.navigation.navigate('Signup')}>
                        <Text style={styleSheet.link}>Cadastrar</Text>
                    </TouchableOpacity>
                </Text>
            </View>
            <Text style={styleSheet.text}>
                    Esqueceu a senha? <TouchableOpacity onPress={() => props.navigation.navigate('ResetPassword')}>
                    <Text style={styleSheet.link}>Resetar</Text>
                </TouchableOpacity>
            </Text>
        </Screen>
    )
}