import { userForm } from '@forms'
import { useAuth } from '@contexts'
import { createUser } from '@requests'
import { Containers } from '@styles'
import { Screen, Logo, Form } from '@components'
import { Text } from '@screens/auth/Login/styles'

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
      <Containers.CenteredDefault>
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
      </Containers.CenteredDefault> 
    </Screen>
  )
}