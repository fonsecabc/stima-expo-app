import { Text } from './styles'
import { useAuth } from '../../../contexts'
import { Screen, Logo, Form } from '../../../components'
import { resetPasswordForm } from '../../../../modules/_forms'

import React, { useState } from 'react'
import Toast from 'react-native-toast-message'

interface ResetPasswordScreenProps {
    navigation: any
}

export const ResetPasswordScreen = ({ navigation }: ResetPasswordScreenProps) => {
  const { resetPassword } = useAuth()
  const [isLoading, setLoading] = useState(false)
    
  const sendPasswordResetEmail = async ({ email }: { email: string}) =>  {
    setLoading(true)
    const response = await resetPassword(email)
    if (response instanceof Error) {
      Toast.show({ type: 'error', text1: response.message })
    }
    setLoading(false)
  }



  return (
    <Screen background='gray'>
      <Logo/>
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
    </Screen>
  )
}