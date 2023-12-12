import { Evaluation } from '@entities'
import { getNutricionistFormValues } from '@forms'
import { getEvaluation as getEvaluationRequest } from '@requests'
import { HeaderTitle, Screen, Bioimpedance, BodyComposition, ClientInfoDisplay, NutricionistForm /*, OrderNutritionalRoutineModal*/ } from '@components'

import { ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'

type EvaluationScreenProps = { 
  navigation: any
  route: any
}

export const EvaluationScreen = ({ navigation, route }: EvaluationScreenProps) => {
  const { evaluationUid } = route.params

  const [evaluation, setEvaluation] = useState<Evaluation>()

  useEffect(() => {
    const fetchData = async () =>  {
      const evaluation = await getEvaluation()
      if (evaluation) return setEvaluation(evaluation)
    }
    fetchData()
  }, [])

  async function getEvaluation(): Promise<void | Evaluation> {
    const response = await getEvaluationRequest({ uid: evaluationUid })

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

        {(evaluation.nutricionistForm) && <NutricionistForm
          title='Questionário Nutricional'
          nutritionistForm={getNutricionistFormValues(evaluation.nutricionistForm)}
        />}

      </ScrollView>
    </Screen>
  )
}
