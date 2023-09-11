import { useAuth } from '../../../contexts'
import { Text, Container } from '../Login/styles'
import { userForm } from '../../../../modules/_forms'
import { Screen, Logo, Form } from '../../../components'
import { createUser } from '../../../../modules/_requests'

import React, { useState } from 'react'

interface SignupScreenProps {
  navigation: any
}

type SignupUserFunction = {
  email: string
  password: string
}

export const SignupScreen = ({ navigation }: SignupScreenProps) => {
  const { login } = useAuth()
  const [isLoading, setLoading] = useState(false)

  const signupUser = async (params: SignupUserFunction) => {
    setLoading(true)
    const response = await createUser(params)
    
    if (response instanceof Error) return setLoading(false)
    
    await login(params)
    setLoading(false)
  }

  return (
    <Screen background='gray'>
      <Logo/>
      <Container>
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
      </Container> 
    </Screen>
  )
}