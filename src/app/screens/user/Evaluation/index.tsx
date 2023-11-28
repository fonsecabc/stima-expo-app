import { Evaluation } from '@entities'
import { getEvaluation as getEvaluationRequest } from '@requests'
import { HeaderTitle, Screen, Bioimpedance, BodyComposition, ClientInfoDisplay/*, OrderNutritionalRoutineModal*/ } from '@components'

import { ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'

type EvaluationScreenProps = { 
  navigation: any
  route: any
}

export const EvaluationScreen = ({ navigation, route }: EvaluationScreenProps) => {
  const { accessToken, currentUser, evaluationUid } = route.params

  const [evaluation, setEvaluation] = useState<Evaluation>()

  useEffect(() => {
    const fetchData = async () =>  {
      const evaluation = await getEvaluation()
      if (evaluation) return setEvaluation(evaluation)
    }
    fetchData()
  }, [])

  async function getEvaluation(): Promise<void | Evaluation> {
    const response = await getEvaluationRequest({
      accessToken: accessToken,
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
      <ScrollView style={{ flex: 1 }}>
        <ClientInfoDisplay client={evaluation.client}/>

        {/* <OrderNutritionalRoutineModal
          evaluationUid={evaluationUid}
          accessToken={accessToken}	
          currentUser={currentUser}
          navigation={navigation}
          nutritionalRoutineStatus={evaluation.nutritionalRoutineStatus}
          nutritionalRoutinePaymentStatus={evaluation.nutritionalRoutinePaymentStatus}
          nutritionalRoutineLink={evaluation.nutritionalRoutineLink}
        /> */}

        <BodyComposition client={evaluation.client}/>
          
        {(evaluation.bioimpedance && evaluation.bioimpedance.fatPercentage && evaluation.bioimpedance.muscleMassPercentage) && (
          
          <Bioimpedance bioimpedance={evaluation.bioimpedance} client={evaluation.client}/>
          
        )}

      </ScrollView>
    </Screen>
  )
}
