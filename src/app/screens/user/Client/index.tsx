import { 
  NavBar, 
  HeaderTitle, 
  Screen, 
  ClientInfoDisplay, 
  BodyComposition, 
  Bioimpedance, 
  ClientEvaluationsList, 
  LineChartDisplay 
} from '../../../components'
import { useAuth } from '../../../contexts'
import { ClientsEvaluationHistory } from '../../../../types/entities'
import { getClientsEvaluationHistory  } from '../../../../modules/_requests'

import { ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'

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
            {clientsHistory.evaluationList.length > 0 && (
              <ClientEvaluationsList evaluationList={clientsHistory.evaluationList} navigation={navigation}/>
            )}
            <BodyComposition client={clientsHistory.client}/>
            {clientsHistory.newestEvaluation && (
              <Bioimpedance bioimpedance={clientsHistory.newestEvaluation.bioimpedance} client={clientsHistory.client}/>
            )}
            <LineChartDisplay
              title='IMC'
              description=' kg/m²'
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
