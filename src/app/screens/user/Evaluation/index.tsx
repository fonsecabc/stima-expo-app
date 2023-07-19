import { useAuth } from '../../../contexts'
import { NavBar, HeaderTitle, Screen, } from '../../../components'
import { getEvaluation as getEvaluationRequest } from '../../../../modules/_requests'

import Toast from 'react-native-toast-message'
import React, { useEffect, useState } from 'react'

type EvaluationScreenProps = { 
  navigation: any
  route: any
}

export const EvaluationScreen = ({ navigation, route }: EvaluationScreenProps) => {
  const { accessToken, currentUser } = useAuth()
  const { evaluationUid } = route.params

  const [evaluation, setEvaluation] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () =>  {
      setIsLoading(true)
      const evaluation = await getEvaluation()
      setEvaluation(evaluation)
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
      <NavBar navigation={navigation} activeScreen={2}/>
    </Screen>
  )
}
