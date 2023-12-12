import { Evaluation } from '@entities'
import { getNutricionistFormValues } from '@forms'
import { getEvaluation as getEvaluationRequest } from '@requests'
import { HeaderTitle, Screen, Bioimpedance, BodyComposition, ClientInfoDisplay, NutricionistForm } from '@components'

import { ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'

type RemoteEvaluationScreenProps = { 
  route: any
}

export const RemoteEvaluationScreen = ({ route }: RemoteEvaluationScreenProps) => {
  const { uid } = route.params

  const [evaluation, setEvaluation] = useState<Evaluation>()

  useEffect(() => {
    const fetchData = async () =>  {
      const evaluation = await getEvaluation()
      if (evaluation) return setEvaluation(evaluation)
    }
    fetchData()
  }, [])

  async function getEvaluation(): Promise<void | Evaluation> {
    const response = await getEvaluationRequest({ uid })

    if (response instanceof Error) return undefined

    return response.body
  }

  console.log(uid)

  if (!evaluation) return (
    <Screen background='gray'>
      <HeaderTitle title='Avaliação'/>
      <ScrollView style={{ flex: 1, paddingTop: 10 }}>
      </ScrollView>
    </Screen>
  )

  return (
    <Screen background='gray'>
      <HeaderTitle title='Avaliação'/>
      <ScrollView style={{ flex: 1 }}>
        <ClientInfoDisplay client={evaluation.client}/>

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
