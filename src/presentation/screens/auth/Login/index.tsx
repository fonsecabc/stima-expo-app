import { AlertContext } from '../../../contexts'
import { Container, Text, Title } from './styles'
import { LoginUserService } from '../../../../application/services'
import { Button, CustomTextInput, Screen, Logo } from '../../../components'

import validator from 'validator'
import { TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'
interface LoginScreenProps {
  navigation: any
}

export const LoginScreen = ({ navigation }: LoginScreenProps) => {

    const [email, setEmail] = useState('')
    const [isValidEmail, setIsValidEmail] = useState(true)

    const [password, setPassword] = useState('')
    const [isValidPassword, setisValidPassword] = useState(true)

    const [isLoading, setLoading] = useState(false)

    const { pushNewAlert } = useContext(AlertContext)

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
            const response = await LoginUserService({ email, password })
            setLoading(false)
            if (response instanceof Error) {
                pushNewAlert(response.message, 'error')
            }
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
                    action={LoginUser}
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
