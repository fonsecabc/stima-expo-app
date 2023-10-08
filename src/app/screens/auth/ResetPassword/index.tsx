import { resetPasswordForm } from '@forms'
import { Screen, Logo, Form } from '@components'
import { Containers } from '@styles'
import { Text } from '@screens/auth/Login/styles'

import React, { useState } from 'react'

interface ResetPasswordScreenProps {
  navigation: any
}

type ResetPasswordProps = { email: string }

export const ResetPasswordScreen = ({ navigation }: ResetPasswordScreenProps) => {
  // const { resetPassword } = useAuth()
  const [isLoading, setLoading] = useState(false)
    
  async function sendPasswordResetEmail(params: ResetPasswordProps)  {
    setLoading(true)
    // await resetPassword(params)
    setLoading(false)
  }

  return (
    <Screen background='gray'>
      <Logo/>
      <Containers.CenteredDefault>
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
      </Containers.CenteredDefault>
    </Screen>
  )
}