import { useAuth } from '../../../contexts'
import { Text, Container } from '../Login/styles'
import { Screen, Logo, Form } from '../../../components'
import { resetPasswordForm } from '../../../../modules/_forms'

import React, { useState } from 'react'

interface ResetPasswordScreenProps {
  navigation: any
}

type ResetPasswordProps = { email: string }

export const ResetPasswordScreen = ({ navigation }: ResetPasswordScreenProps) => {
  const { resetPassword } = useAuth()
  const [isLoading, setLoading] = useState(false)
    
  async function sendPasswordResetEmail(params: ResetPasswordProps)  {
    setLoading(true)
    await resetPassword(params)
    setLoading(false)
  }

  return (
    <Screen background='gray'>
      <Logo/>
      <Container>
        <Form
          values={{}}
          title='Resetar Senha'
          inputs={resetPasswordForm}
          submitAction={sendPasswordResetEmail}
          buttonText='Enviar'
          isLoading={isLoading}
        />
        <Text isLink={false}>
          Senha Resetada? Faça <Text isLink={true} onPress={() => navigation.navigate('Login')}>Login</Text>
        </Text>
      </Container>
    </Screen>
  )
}