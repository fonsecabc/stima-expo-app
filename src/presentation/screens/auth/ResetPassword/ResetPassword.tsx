import { styleSheet } from './StyleSheet'
import React, { ReactNode, useState } from 'react'
import { Image, View, Text, TouchableOpacity } from 'react-native'
import { ResetPasswordService } from '../../../../application/services'
import { Button, CustomTextInput, Screen, Notification, Loader } from '../../../components'
import validator from 'validator'

interface ResetPasswordScreenProps {
    navigation: any
    children: ReactNode
}

export const ResetPasswordScreen = (props: ResetPasswordScreenProps) => {
    const [email, setEmail] = useState('')
    const [isValidEmail, setIsValidEmail] = useState(true)
    
    const [isLoading, setLoading] = useState(false)

    const [notification, showNotification] = useState(false)
    const [notificationText, setNotificationText] = useState('')

    function checkEmail(email: string) {
        const isValid = validator.isEmail(email)
        setIsValidEmail(isValid)

        return isValid
    }
    
    async function SendResetPasswordEmail() {
        const emailIsValid = checkEmail(email)

        if (emailIsValid) {
            setLoading(true)
            const isLoggedIn = await ResetPasswordService({ email })
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
                <Text style={styleSheet.title}>Resetar Senha</Text>
                <CustomTextInput 
                    const={email}
                    isValid={isValidEmail}
                    isRequired={true}
                    placeholder='Email'
                    contentType='emailAddress'
                    setConstAction={setEmail}
                />
                <Button style={{ marginTop: 25 }} action={SendResetPasswordEmail} text='Enviar' isDisabled={false}/>
            </View>
            <Text style={[styleSheet.text]}>
                    Senha Resetada? Faça <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
                    <Text style={styleSheet.link}>Login</Text>
                </TouchableOpacity>
            </Text>
        </Screen>
    )
}