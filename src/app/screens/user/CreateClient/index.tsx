import { useAuth } from '../../../contexts'
import { Sex } from '../../../../types/enums'
import { clientForm } from '../../../../modules/_forms'
import { createClient } from '../../../../modules/_requests'
import { HeaderTitle, Screen, Form } from '../../../components'

import React, { useState } from 'react'
import Toast from 'react-native-toast-message'
import { Container } from '../CreateEvaluation/styles'

type CreateClientScreenProps = { 
    navigation: any
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
 
export const CreateClientScreen = ({ navigation }: CreateClientScreenProps) => {
  const { accessToken, currentUser } = useAuth()
  const [isLoading, setLoading] = useState(false)

  const createNewClient = async (params: CreateNewClient) => {
    setLoading(true)
    const response = await createClient({
      accessToken: await accessToken(),
      userUid: currentUser?.uid ?? '',
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