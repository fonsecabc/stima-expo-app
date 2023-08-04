import { useAuth } from '../../../contexts'
import { QueryOperators } from '../../../../types/enums'
import { ScrollView } from 'react-native'
import { Client, EvaluationListObject } from '../../../../types/entities'
import { getClient as getClientRequest, getEvaluationsQuery,  } from '../../../../modules/_requests'
import { NavBar, HeaderTitle, Screen, ClientInfoDisplay, ClientEvaluationsList } from '../../../components'

import Toast from 'react-native-toast-message'
import React, { useEffect, useState } from 'react'

type ClientScreenProps = { 
  navigation: any
  route: any
}

export const ClientScreen = ({ navigation, route }: ClientScreenProps) => {
  const { accessToken, currentUser } = useAuth()
  const { clientUid } = route.params

  const [client, setClient] = useState<Client>()
  const [evaluationList, setEvaluationList] = useState<EvaluationListObject[]>([])

  useEffect(() => {
    const fetchData = async () =>  {
      const client = await getClient()
      const evaluationList = await getEvaluationsList()
      setClient(client)
      setEvaluationList(evaluationList)
    }
    fetchData()
  }, [])
    
  const getClient = async () => {
    const response = await getClientRequest({
      accessToken: await accessToken(),
      uid: clientUid,
      userUid: currentUser?.uid ?? ''
    })
    if (response instanceof Error) {
      Toast.show({ type: 'error', text1: response.message })
      return undefined
    }

    return response.data
  }

  const getEvaluationsList = async () => {
    const response = await getEvaluationsQuery(
      await accessToken(),
      currentUser?.uid ?? '',
      {
        param: clientUid,
        operator: QueryOperators.EQUAL,
        comparison: 'client.uid'
      }
    )
    if (response instanceof Error) {
      Toast.show({ type: 'error', text1: response.message })
      return []
    }

    return response.data
  }

  return (
    <Screen background='gray'>
      <HeaderTitle navigation={navigation} goBack={true} title='Cliente'/>
      {client 
        ? (
          <ScrollView style={{ flex: 1 }}>
            <ClientInfoDisplay client={client}/>

            <ClientEvaluationsList 
              evaluationList={evaluationList} 
              navigation={navigation}
            />
          </ScrollView>
        )
        : (
          <ScrollView style={{ flex: 1 }}/>
        )
      }
      <NavBar navigation={navigation} activeScreen={2}/>
    </Screen>
  )
}
