import { 
  Screen, 
  HeaderTitle, 
  Bioimpedance, 
  BodyComposition, 
  ClientInfoDisplay, 
  ClientOverallResults,
  ClientEvaluationsList
} from '@components'
import { variables } from '@config'
import { ClientHistory } from '@components'
import { getClientsEvaluationHistory  } from '@requests'
import { ClientsEvaluationHistory, EvaluationListObject } from '@entities'

import { Linking, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'

type RemoteClientScreenProps = { 
  route: any
}

export const RemoteClientScreen = ({ route }: RemoteClientScreenProps) => {
  const [clientsHistory, setClientsHistory] = useState<ClientsEvaluationHistory>()

  useEffect(() => {
    const fetchData = async () =>  {
      const clientsHistory = await getClientHistory()
      setClientsHistory(clientsHistory)
    }
    fetchData()
  }, [])

  const getClientHistory = async () => {
    const response = await getClientsEvaluationHistory(route.params)

    return response instanceof Error ? undefined : response.body
  }

  if (!clientsHistory) return (
    <Screen background='gray'>
      <HeaderTitle title='Cliente'/>
      <ScrollView style={{ flex: 1, paddingTop: 10 }}>
      </ScrollView>
    </Screen>
  )

  return (
    <Screen background='gray'>
      <HeaderTitle title='Cliente'/>
      <ScrollView style={{ flex: 1, paddingTop: 10 }}>
        <ClientInfoDisplay client={clientsHistory.client}/>

        {clientsHistory.evaluationList.length > 0 && (
          <ClientEvaluationsList 
            evaluationList={clientsHistory.evaluationList} 
            action={(evaluation: EvaluationListObject) =>
              Linking.openURL(`${variables.domain}/remote/evaluation?uid=${evaluation.uid}`)
            }
          />
        )}

        {(clientsHistory.overallResults && clientsHistory.evaluationList.length > 1) && (
          <ClientOverallResults overallResults={clientsHistory.overallResults}/>
        )}

        <BodyComposition client={clientsHistory.client}/>

        {clientsHistory.newestEvaluation && (
          <Bioimpedance bioimpedance={clientsHistory.newestEvaluation.bioimpedance} client={clientsHistory.client}/>
        )}

        {clientsHistory.history && (
          <ClientHistory history={clientsHistory.history}/>
        )}
      </ScrollView>
    </Screen>
  )
}
