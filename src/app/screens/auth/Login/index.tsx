import { userFormLogin } from '@forms'
import { useAuth } from '@contexts'
import { Containers } from '@styles'
import { Screen, Logo, Form } from '@components'
import { Text } from '@screens/auth/Login/styles'

import React, { useState } from 'react'

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
    setLoading(true)
    await login(params)
    setLoading(false)
  }

  return (
    <Screen background='gray'>
      <Logo />
      <Containers.CenteredDefault>
        <Form
          values={{}}
          title='Login'
          inputs={userFormLogin}
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
      </Containers.CenteredDefault>
    </Screen>
  )
}
