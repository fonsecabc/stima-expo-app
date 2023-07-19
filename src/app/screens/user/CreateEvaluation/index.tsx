import { useAuth } from '../../../contexts'
import * as forms from '../../../../modules/_forms'
import { createEvaluation } from '../../../../modules/_requests'
import { HeaderTitle, Screen, Form, ProgressBar } from '../../../components'

import React, { useState } from 'react'
import Toast from 'react-native-toast-message'
import { Client } from '../../../../types/entities'

type CreateEvaluationScreenProps = { 
    navigation: any
}
 
export const CreateEvaluationScreen = ({ navigation }: CreateEvaluationScreenProps) => {
  const { accessToken, currentUser } = useAuth()
  const [isLoading, setLoading] = useState(false)

  const [formProgress, setFormProgress] = useState(0)

  const [client, setClient] = useState<Client>()
  const [bioimpedance, setBioimpedance] = useState()
  const [measurements, setMeasurements] = useState()
  const [nutricionistForm, setNutricionistForm] = useState()

  const createNewEvaluation = async () => {
    setLoading(true)
    if (!client) {
      setLoading(false)
      return Toast.show({ type: 'error', text1: 'Preencha os dados do cliente' })
    }

    const response = await createEvaluation(
      await accessToken(),
      currentUser?.uid ?? '',
      client,
      bioimpedance,
      measurements,
      nutricionistForm
    )
    if (response instanceof Error) {
      setLoading(false)
      return Toast.show({ type: 'error', text1: response.message })
    }

    setLoading(false)
    navigation.navigate('Evaluation', { evaluationId: response.data.uid })
    return Toast.show({ type: 'success', text1: 'Avaliação criada com sucesso' })
  }
  
  return (
    <Screen background='gray'>
      <HeaderTitle navigation={navigation} goBack={true}/>
      <ProgressBar progress={formProgress}/>
      {
        formProgress === 0 && <Form
          title='Cliente'
          inputs={forms.clientForm}
          submitAction={(params) => { 
            setClient(params)
            setFormProgress(0.33)
          }}
          isMultipage={true}
          canGoBack={false}
          buttonText='SALVAR'
          isLoading={isLoading}
          values={client}
        />
      }
      {
        formProgress === 0.33 && <Form
          title='Avaliação Nutricional'
          inputs={forms.nutricionistForm}
          submitAction={(params) => { 
            setNutricionistForm(params)
            setFormProgress(0.66)
          }}
          isMultipage={true}
          canGoBack={false}
          buttonText='SALVAR'
          isLoading={isLoading}
          values={nutricionistForm}
        />
      }
      {
        formProgress === 0.66 && <Form
          title='Bioimpedância'
          inputs={forms.bioimpedanceForm}
          submitAction={(params) => { 
            setBioimpedance(params)
            setFormProgress(0.99)
          }}
          isMultipage={true}
          canGoBack={false}
          buttonText='SALVAR'
          isLoading={isLoading}
          values={bioimpedance}
        />
      }
      {
        formProgress === 0.99 && <Form
          title='Medidas'
          inputs={forms.measurementsForm}
          submitAction={(params) => { 
            setMeasurements(params)
            createNewEvaluation()
          }}
          buttonText='SALVAR'
          isLoading={isLoading}
          values={measurements}
        />
      }
    </Screen>
  )
}