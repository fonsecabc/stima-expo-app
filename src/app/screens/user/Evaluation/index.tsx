import { useAuth } from '../../../contexts'
import { Display, Container, Label } from './styles'
import { NavBar, HeaderTitle, Screen, } from '../../../components'
import { getEvaluation as getEvaluationRequest } from '../../../../modules/_requests'

import Toast from 'react-native-toast-message'
import React, { useEffect, useState } from 'react'
import { Evaluation } from '../../../../types/entities'
import { NutritionalRoutineStatus } from '../../../../types/enums'

type EvaluationScreenProps = { 
  navigation: any
  route: any
}

const evaluationMock: Evaluation = {bioimpedance: JSON.parse("{\"fatPercentage\":\"\",\"muscleMassPercentage\":\"\",\"basalMetabolicRate\":\"\",\"metabolicAge\":\"\"}"), clientName: "Caio Braga", clientUid: "cdc535c71dcffd83581d7dca5550d5e359ee1b3fa2f52844a2316e3aaf5d4449", createdAt: new Date("2023-07-21T17:10:18.019Z"), measurements: JSON.parse("{}"), nutricionistForm: JSON.parse("{\"objective\":\"\",\"urine\":\"\",\"intestine\":\"\",\"pathologies\":\"\",\"medicines\":\"\",\"symptoms\":\"\",\"apetite\":\"\",\"wakeUpTime\":\"\",\"sleepTime\":\"\",\"foodRestrictions\":\"\",\"eatingHabits\":\"\",\"habits\":\"\",\"drinkingFrequency\":\"\",\"physicalActivity\":\"\",\"physicalActivityIntensity\":\"\",\"usualBreakfast\":\"\",\"usualMorningSnack\":\"\",\"usualLunch\":\"\",\"usualEveningSnack\":\"\",\"usualSupper\":\"\",\"favoriteFoods\":\"\",\"hatedFoods\":\"\",\"suplements\":\"\",\"note\":\"\"}"), nutritionalRoutineStatus: NutritionalRoutineStatus.NOT_REQUESTED, uid: "cde74083cdccc40c9409e2e1dea82f252b1ae9c566af27bfe89689090c814f77", userUid: "OmAeiidI8MYvslXIe7fp8b1WT6G2"}

export const EvaluationScreen = ({ navigation, route }: EvaluationScreenProps) => {
  const { accessToken, currentUser } = useAuth()
  const { evaluationUid } = route.params

  const [evaluation, setEvaluation] = useState<Evaluation>()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () =>  {
      setIsLoading(true)
      const evaluation = await getEvaluation()
      setEvaluation(evaluationMock)
      setIsLoading(false)
    }
    fetchData()
  }, [])
    
  const getEvaluation = async () => {
    const response = await getEvaluationRequest({
      accessToken: await accessToken(),
      uid: evaluationUid,
      userUid: currentUser?.uid ?? ''
    })
    if (response instanceof Error) {
      Toast.show({ type: 'error', text1: response.message })
      return {}
    }

    return response.data
  }

  return (
    <Screen background='gray'>
      <HeaderTitle navigation={navigation} goBack={true}/>
      <Label>Composição Corporal</Label>
      <Container>
        <Display>
          
        </Display>
        <Display>

        </Display>
      </Container>
      <NavBar navigation={navigation} activeScreen={1}/>
    </Screen>
  )
}
