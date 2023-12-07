import { 
  HeaderTitle, 
  Screen, 
  ClientInfoDisplay, 
  BodyComposition, 
  Bioimpedance, 
  ClientEvaluationsList,
  ClientOverallResults,
  Button
} from '@components'
import { Colors } from '@styles'
import { useAuth } from '@contexts'
import { variables } from '@config'
import { ClientHistory } from '@components'
import { ClientsEvaluationHistory } from '@entities'
import { getClientsEvaluationHistory  } from '@requests'
import { ButtonContainer } from '@screens/user/Client/styles'
import { IconContainer } from '@components/PaginatedList/styles'

import React, { useEffect, useState } from 'react'
import { Linking, Platform, ScrollView, Share } from 'react-native'
import { PlusIcon, ShareIcon } from 'react-native-heroicons/solid'

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
    navigation.navigate('Create Evaluation', { client: clientsHistory.client })
  }

  const shareRemoteEvaluationLink = () => {
    if (!currentUser) return

    const origin = Platform.OS === 'web' ? window.location.origin : variables.domain 
    const link = `${origin}/remote/create-evaluation?clientUid=${clientsHistory.client.uid}&userUid=${currentUser?.uid}`

    const message = `Olá Caio Braga, como vai? \n\nAqui está o link para realizar sua avaliação personalizada remotamente: \n\n${link}`
    const whatsappLink = `https://wa.me//5531983904021?text=${encodeURIComponent(message)}`

    if (Platform.OS === 'web') {
      Linking.openURL(whatsappLink)
      return
    }

    Share.share({
      message: `
        Olá ${clientsHistory.client.name}, como vai? \n\nAqui está o link para realizar sua avaliação personalizada remotamente: \n\n${link} \n\nQualquer duvida, pode me chamar!💚
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
          <ClientEvaluationsList evaluationList={clientsHistory.evaluationList} navigation={navigation}/>
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
