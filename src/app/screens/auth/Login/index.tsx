import { Text } from './styles'
import { useAuth } from '../../../contexts'
import { userForm } from '../../../../modules/_forms'
import { Screen, Logo, Form } from '../../../components'

import React, { useState } from 'react'
import Toast from 'react-native-toast-message'

interface LoginScreenProps {
  navigation: any
}

type LoginUserFunction = {
  email: string
  password: string
}

export const LoginScreen = ({ navigation }: LoginScreenProps) => {
  const { login } = useAuth()
  const [isLoading, setLoading] = useState(false)

  const loginUser = async (params: LoginUserFunction) => {
    const { email, password } = params

    setLoading(true)
    const response = await login(email, password)
    if (response instanceof Error) {
      Toast.show({ type: 'error', text1: response.message })
    }
    setLoading(false)
  }

  return (
    <Screen background='gray'>
      <Logo />
      <Form
        values={{}}
        title='Login'
        inputs={userForm}
        submitAction={loginUser}
        buttonText='Entrar'
        isLoading={isLoading}
      />
      <Text isLink={false}>
        Novo usuário? <Text isLink={true} onPress={() => navigation.navigate('Signup')}> Cadastrar</Text>
      </Text>
      <Text isLink={false}>
        Esqueceu a senha? <Text isLink={true} onPress={() => navigation.navigate('ResetPassword')}> Resetar</Text>
      </Text>
    </Screen>
  )
}
