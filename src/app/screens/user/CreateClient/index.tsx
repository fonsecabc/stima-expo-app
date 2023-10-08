import { Sex } from '@enums'
import { clientForm } from '@forms'
import { createClient } from '@requests'
import { HeaderTitle, Screen, Form } from '@components'
import { Container } from '@screens/user/CreateEvaluation/styles'

import React, { useState } from 'react'
import Toast from 'react-native-toast-message'

type CreateClientScreenProps = { 
  navigation: any
  route: any
}

type CreateNewClient = { 
  name: string
  email?: string
  phone: string
  dateOfBirth: string
  sex: Sex
  height: number
  weight: number
}
 
export const CreateClientScreen = ({ navigation, route }: CreateClientScreenProps) => {
  const { accessToken, currentUser } = route.params
  const [isLoading, setLoading] = useState(false)

  const createNewClient = async (params: CreateNewClient) => {
    setLoading(true)
    const response = await createClient({
      accessToken: accessToken,
      userUid: currentUser.uid,
      ...params
    })
    setLoading(false)

    if (response instanceof Error || !response.body) return
    
    const client = response.body
    
    navigation.navigate('Client', { clientUid: client.uid })
    return Toast.show({ type: 'success', text1: `Cliente ${client.name} criado com sucesso.` })
  }
  
  return (
    <Screen background='gray'>
      <HeaderTitle navigation={navigation} goBack={true}/>
      <Container>
        <Form
          title='Cliente'
          inputs={clientForm}
          submitAction={createNewClient}
          buttonText='CRIAR'
          isLoading={isLoading}
          values={{}}
        />
      </Container>
    </Screen>
  )
}