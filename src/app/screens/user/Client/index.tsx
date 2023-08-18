import { useAuth } from '../../../contexts'
import { ScrollView } from 'react-native'
import { getClientsEvaluationHistory  } from '../../../../modules/_requests'
import { NavBar, HeaderTitle, Screen, ClientInfoDisplay, BodyComposition, Bioimpedance } from '../../../components'

import React, { useEffect, useState } from 'react'
import { ClientsEvaluationHistory } from '../../../../types/entities'

type ClientScreenProps = { 
  navigation: any
  route: any
}

export const ClientScreen = ({ navigation, route }: ClientScreenProps) => {
  const { currentUser } = useAuth()
  const { clientUid } = route.params

  const [clientsHistory, setClientsHistory] = useState<ClientsEvaluationHistory>()

  useEffect(() => {
    const fetchData = async () =>  {
      const clientsHistory = await getClientHistory()
      setClientsHistory(clientsHistory)
    }
    fetchData()
  }, [])
    
  const getClientHistory = async () => {
    const response = await getClientsEvaluationHistory({
      uid: clientUid,
      userUid: currentUser?.uid ?? ''
    })

    return response instanceof Error ? undefined : response.body
  }

  return (
    <Screen background='gray'>
      <HeaderTitle navigation={navigation} goBack={true} title='Cliente'/>
      {clientsHistory 
        ? (
          <ScrollView style={{ flex: 1 }}>
            <ClientInfoDisplay client={clientsHistory.client}/>
            <BodyComposition client={clientsHistory.client}/>
            {clientsHistory.newestEvaluation && (
              <Bioimpedance bioimpedance={JSON.parse(clientsHistory.newestEvaluation.bioimpedance)} client={clientsHistory.client}/>
            )}
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
