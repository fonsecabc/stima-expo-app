import { Evaluation } from '@entities'
import { getEvaluation as getEvaluationRequest } from '@requests'
import { HeaderTitle, Screen, Bioimpedance, BodyComposition, ClientInfoDisplay, Button, OrderNutritionalRoutineModal } from '@components'

import { ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NutritionalRoutineStatus } from '@enums'

type EvaluationScreenProps = { 
  navigation: any
  route: any
}

export const EvaluationScreen = ({ navigation, route }: EvaluationScreenProps) => {
  const { accessToken, currentUser, evaluationUid } = route.params

  const [client, setClient] = useState<Evaluation['client']>()
  //const [measurements, setMeasurements] = useState<Evaluation['measurements']>()
  const [bioimpedance, setBioimpedance] = useState<Evaluation['bioimpedance']>()
  const [nutritionalRoutineStatus, setNutritionalRoutineStatus] = useState<Evaluation['nutritionalRoutineStatus']>()
  //const [nutricionistForm, setNutricionistForm] = useState<Evaluation['nutricionistForm']>()
  
  useEffect(() => {
    const fetchData = async () =>  {
      const evaluation = await getEvaluation()
      if (evaluation) {
        setClient(evaluation.client)
        setBioimpedance(evaluation.bioimpedance)
        setNutritionalRoutineStatus(evaluation.nutritionalRoutineStatus)
        //setMeasurements(evaluation.measurements)
        //setNutricionistForm(evaluation.nutricionistForm)
      }
    }
    fetchData()
  }, [])

  const getEvaluation = async () => {
    const response = await getEvaluationRequest({
      accessToken: accessToken,
      uid: evaluationUid,
      userUid: currentUser.uid
    })
    console.log(response)

    return response instanceof Error ? navigation.goBack() : response.body
  }

  if (!client || !nutritionalRoutineStatus) return (
    <Screen background='gray'>
      <HeaderTitle navigation={navigation} goBack={true} title='Avaliação'/>
      <ScrollView style={{ flex: 1, paddingTop: 10 }}>
      </ScrollView>
    </Screen>
  )

  return (
    <Screen background='gray'>
      <HeaderTitle navigation={navigation} goBack={true} title='Avaliação'/>
      <ScrollView style={{ flex: 1 }}>
        <ClientInfoDisplay client={client}/>

        {nutritionalRoutineStatus === NutritionalRoutineStatus.NOT_REQUESTED && (
          <OrderNutritionalRoutineModal
            evaluationUid={evaluationUid}
            accessToken={accessToken}	
            currentUser={currentUser}
            navigation={navigation}
          />
        )}


        <BodyComposition client={client}/>
          
        {(bioimpedance && bioimpedance.fatPercentage && bioimpedance.muscleMassPercentage) && (
          
          <Bioimpedance bioimpedance={bioimpedance} client={client}/>
          
        )}

      </ScrollView>
    </Screen>
  )
}
