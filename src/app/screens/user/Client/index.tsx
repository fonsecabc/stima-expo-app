import { 
  HeaderTitle, 
  Screen, 
  ClientInfoDisplay, 
  BodyComposition, 
  Bioimpedance, 
  ClientEvaluationsList,
  ClientOverallResults,
  Button,
  StartEvaluationModal, 
} from '@components'
import { Colors } from '@styles'
import { useAuth } from '@contexts'
import { ClientHistory } from '@components'
import { ClientsEvaluationHistory } from '@entities'
import { getClientsEvaluationHistory  } from '@requests'

import { ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { PlusIcon } from 'react-native-heroicons/solid'

type ClientScreenProps = { 
  navigation: any
  route: any
}

export const ClientScreen = ({ navigation, route }: ClientScreenProps) => {
  const { currentUser } = useAuth()
  const { clientUid } = route.params

  const [clientsHistory, setClientsHistory] = useState<ClientsEvaluationHistory>()

  const [isStartEvaluationModalFocused, setStartEvaluationModalFocus] = useState(false)
  const [hasNutritionalRoutine, setHasNutritionalRoutine] = useState(false)

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

  if (!clientsHistory) return (
    <Screen background='gray'>
      <HeaderTitle navigation={navigation} goBack={true} title='Cliente'/>
      <ScrollView style={{ flex: 1, paddingTop: 10 }}>
      </ScrollView>
    </Screen>
  )

  const createEvaluation = () => {
    navigation.navigate('Create Evaluation', { hasNutritionalRoutine, client: clientsHistory.client })
  }
  
  return (
    <Screen background='gray'>
      <HeaderTitle navigation={navigation} goBack={true} title='Cliente'/>
      <ScrollView style={{ flex: 1, paddingTop: 10 }}>
        <ClientInfoDisplay client={clientsHistory.client}/>

        <Button
          action={() => setStartEvaluationModalFocus(true)} 
          text='Nova avaliação' 
          icon={<PlusIcon color={Colors.white}/>}
          style={{ marginBottom: 0 }}
          type='default'
        />
        <StartEvaluationModal
          isDoneAction={createEvaluation}
          isFocused={isStartEvaluationModalFocused}
          setFocus={setStartEvaluationModalFocus}
          setNutritionalRoutine={setHasNutritionalRoutine}
        />

        {clientsHistory.evaluationList.length > 0 && (
          <ClientEvaluationsList evaluationList={clientsHistory.evaluationList} navigation={navigation}/>
        )}

        {clientsHistory.overallResults && (
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
