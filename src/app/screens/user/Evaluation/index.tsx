import { useAuth } from '../../../contexts'
import { Evaluation } from '../../../../types/entities'
import { getEvaluation as getEvaluationRequest } from '../../../../modules/_requests'
import { HeaderTitle, Screen, Bioimpedance, BodyComposition, ClientInfoDisplay } from '../../../components'

import { ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'

type EvaluationScreenProps = { 
  navigation: any
  route: any
}

export const EvaluationScreen = ({ navigation, route }: EvaluationScreenProps) => {
  const { accessToken, currentUser, logout } = useAuth()
  const { evaluationUid } = route.params

  
  const [evaluation, setEvaluation] = useState<Evaluation>()
  //const [measurements, setMeasurements] = useState<Evaluation['measurements']>()
  const [bioimpedance, setBioimpedance] = useState<Evaluation['bioimpedance']>()
  //const [nutricionistForm, setNutricionistForm] = useState<Evaluation['nutricionistForm']>()
  
  useEffect(() => {
    const fetchData = async () =>  {
      const evaluation = await getEvaluation()
      setEvaluation(evaluation)
      setBioimpedance(evaluation.bioimpedance)
      //setMeasurements(evaluation.measurements)
      //setNutricionistForm(evaluation.nutricionistForm)
    }
    fetchData()
  }, [])
    
  const getEvaluation = async () => {
    if (!currentUser) return logout()

    const response: any = await getEvaluationRequest({
      accessToken: await accessToken(),
      uid: evaluationUid,
      userUid: currentUser.uid
    })

    return response instanceof Error ? navigation.goBack() : response.body
  }

  if (!evaluation) return (
    <Screen background='gray'>
      <HeaderTitle navigation={navigation} goBack={true} title='Avaliação'/>
      <ScrollView style={{ flex: 1, paddingTop: 10 }}>
      </ScrollView>
    </Screen>
  )

  return (
    <Screen background='gray'>
      <HeaderTitle navigation={navigation} goBack={true} title='Avaliação'/>
      <ScrollView style={{ flex: 1, paddingTop: 20 }}>
        <ClientInfoDisplay client={evaluation.client}/>

        <BodyComposition client={evaluation.client}/>
          
        {(bioimpedance && bioimpedance.fatPercentage && bioimpedance.muscleMassPercentage) && (
          
          <Bioimpedance bioimpedance={bioimpedance} client={evaluation.client}/>
          
        )}

      </ScrollView>
    </Screen>
  )
}
