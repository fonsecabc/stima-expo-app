import { 
  Button,
  Screen, 
  HeaderTitle, 
  Bioimpedance,
  BodyComposition,
  ClientInfoDisplay, 
  ClientOverallResults,
  ClientEvaluationsList
} from '@components'
import { Colors } from '@styles'
import { useAuth } from '@contexts'
import { variables } from '@config'
import { ClientHistory } from '@components'
import { ClientsEvaluationHistory, EvaluationListObject } from '@entities'
import { getClientsEvaluationHistory  } from '@requests'
import { ButtonContainer } from '@screens/user/Client/styles'
import { IconContainer } from '@components/PaginatedList/styles'

import React, { useEffect, useState } from 'react'
import { PlusIcon, ShareIcon } from 'react-native-heroicons/solid'
import { Linking, Platform, ScrollView, Share } from 'react-native'

type ClientScreenProps = { 
  navigation: any
  route: any
}

export const ClientScreen = ({ navigation, route }: ClientScreenProps) => {
  const { currentUser } = useAuth()
  const { clientUid } = route.params

  const [clientsHistory, setClientsHistory] = useState<ClientsEvaluationHistory>()

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
    const { client } = clientsHistory
    navigation.navigate(
      'Create Evaluation', 
      { 
        client: {
          name: client.name,
          email: client.email,
          phone: client.phone,
          dateOfBirth: client.dateOfBirth,
          sex: client.sex
        }   
      }
    )
  }

  const shareRemoteEvaluationLink = () => {
    const { client } = clientsHistory
    client.phone = client.phone.replace(/\D/g, '')

    if (!currentUser) return

    const origin = Platform.OS === 'web' ? window.location.origin : variables.domain 
    const link = `${origin}/remote/create-evaluation?clientUid=${client.uid}&userUid=${currentUser?.uid}`

    const message = `Olá ${client.name}, como vai? \n\nAqui está o link para realizar sua avaliação personalizada remotamente: \n\n${link}`
    const whatsappLink = `https://wa.me//${client.phone}?text=${encodeURIComponent(message)}`

    if (Platform.OS === 'web') {
      Linking.openURL(whatsappLink)
      return
    }

    Share.share({
      message: `
        Olá ${client.name}, como vai? \n\nAqui está o link para realizar sua avaliação personalizada remotamente: \n\n${link} \n\nQualquer duvida, pode me chamar!💚
      `,
      url: link
    })
  }

  return (
    <Screen background='gray'>
      <HeaderTitle navigation={navigation} goBack={true} title='Cliente'/>
      <ScrollView style={{ flex: 1, paddingTop: 10 }}>
        <ClientInfoDisplay client={clientsHistory.client}/>

        <ButtonContainer>
          <Button
            action={createEvaluation} 
            text='Nova avaliação' 
            icon={<PlusIcon color={Colors.white}/>}
            style={{ flex: 1, marginLeft: 0 }}
            type='default'
          />
          <IconContainer
            style={{ marginHorizontal: 0 }}
            onPress={shareRemoteEvaluationLink}
          >
            <ShareIcon color={Colors.white}/>
          </IconContainer>
        </ButtonContainer>

        {clientsHistory.evaluationList.length > 0 && (
          <ClientEvaluationsList evaluationList={clientsHistory.evaluationList} action={(evaluation: EvaluationListObject) => navigation.navigate('Evaluation', { evaluationUid: evaluation.uid })}/>
        )}

        {(clientsHistory.overallResults && clientsHistory.evaluationList.length > 1) && (
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
