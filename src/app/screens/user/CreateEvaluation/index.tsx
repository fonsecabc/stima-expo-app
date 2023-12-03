import * as forms from '@forms'
import { Client } from '@entities'
import { createEvaluation } from '@requests'
import { Container } from '@screens/user/CreateEvaluation/styles'
import { HeaderTitle, Screen, Form, ProgressBar } from '@components'
import Toast from 'react-native-toast-message'
import React, { useEffect, useState } from 'react'

type CreateEvaluationScreenProps = { 
  navigation: any
  route: any
}

export const CreateEvaluationScreen = ({ navigation, route }: CreateEvaluationScreenProps) => {
  const { accessToken, currentUser, client } = route.params

  const [isLoading, setLoading] = useState(false)
  const [formProgress, setFormProgress] = useState(0)
  const [formValues, setFormValues] = useState({
    client: client ?? {},
    bioimpedance: {},
    measurements: {},
    nutricionistForm: {},
    skinFold: {}
  })

  useEffect(() => {
    if (client) setFormValues({ ...formValues, client })
  }, [client])

  const createNewEvaluation = async () => {
    if (!formValues.client) return

    setLoading(true)

    const response = await createEvaluation({
      accessToken: accessToken,
      userUid: currentUser.uid,
      client: formValues.client as Client,
      bioimpedance: formValues.bioimpedance,
      measurements: formValues.measurements,
      nutricionistForm: formValues.nutricionistForm,
      skinFold: formValues.skinFold
    })
    setLoading(false)
    if (response instanceof Error || !response.body) return

    Toast.show({ type: 'success', text1: 'Avaliação criada com sucesso' })

    return navigation.navigate('Evaluation', { evaluationUid: response.body.uid })
  }

  return (
    <Screen background='gray'>
      <HeaderTitle navigation={navigation} goBack={true} />
      <ProgressBar 
        progress={formProgress}
        label={`Progresso ${Math.round(formProgress * 100)}%`}
      />
      <Container>
        {formProgress === 0 && <Form
          title='Cliente'
          inputs={forms.clientForm}
          submitAction={(params) => { 
            setFormValues({ ...formValues, client: params })
            setFormProgress(0.25)
          }}
          isMultipage={true}
          canGoBack={false}
          buttonText='SALVAR'
          isLoading={isLoading}
          values={formValues.client}
        />}
        {formProgress === 0.25 && <Form
          title='Avaliação Nutricional'
          inputs={forms.nutricionistForm}
          submitAction={(params) => { 
            setFormValues({ ...formValues, nutricionistForm: params })
            setFormProgress(0.5)
          }}
          goBack={() => setFormProgress(0)}
          isMultipage={true}
          canGoBack={true}
          buttonText='SALVAR'
          isLoading={isLoading}
          values={formValues.nutricionistForm}
        />}
        {formProgress === 0.5 && <Form
          title='Bioimpedância'
          inputs={forms.bioimpedanceForm}
          submitAction={(params) => { 
            setFormValues({ ...formValues, bioimpedance: params })
            setFormProgress(0.75)
          }}
          isMultipage={true}
          canGoBack={true}
          goBack={() => setFormProgress(0.25)}
          buttonText='SALVAR'
          isLoading={isLoading}
          values={formValues.bioimpedance}
        />}
        {formProgress === 0.75 && <Form
          title='Medidas'
          inputs={forms.measurementsForm}
          submitAction={(params) => { 
            setFormValues({ ...formValues, measurements: params })
            setFormProgress(0.99)
          }}
          goBack={() => setFormProgress(0.5)}
          buttonText='SALVAR'
          isMultipage={true}
          canGoBack={true}
          isLoading={isLoading}
          values={formValues.measurements}
        />}
        {formProgress === 0.99 && <Form
          title='Dobras Cutâneas'
          inputs={forms.skinFoldForm}
          submitAction={(params) => { 
            setFormValues({ ...formValues, skinFold: params })
            createNewEvaluation()
          }}
          goBack={() => setFormProgress(0.75)}
          buttonText='SALVAR'
          canGoBack={true}
          isLoading={isLoading}
          values={formValues.skinFold}
        />}
      </Container>
    </Screen>
  )
}
