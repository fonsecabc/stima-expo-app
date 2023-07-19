import { Text } from './styles'
import { useAuth } from '../../../contexts'
import { Screen, Logo, Form } from '../../../components'
import { createUser } from '../../../../modules/_requests'

import Toast from 'react-native-toast-message'
import React, { useState } from 'react'
import { userForm } from '../../../../modules/_forms'

interface SignupScreenProps {
  navigation: any
}

type SignupUserFunction = {
  email: string
  password: string
  passwordConfirmation: string
}

export const SignupScreen = ({ navigation }: SignupScreenProps) => {
  const { login } = useAuth()
  const [isLoading, setLoading] = useState(false)

  const signupUser = async (params: SignupUserFunction) => {
    const { email, password, passwordConfirmation } = params

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

  return (
    <Screen background='gray'>
      <Logo />
      <Form
        values={{}}
        title='Crie sua conta'
        inputs={userForm}
        submitAction={signupUser}
        buttonText='Criar'
        isLoading={isLoading}
      />
      <Text isLink={false}>
        Já tem conta?  <Text isLink={true} onPress={() => navigation.navigate('Login')}>Entre</Text>
      </Text>
    </Screen>
  )
}