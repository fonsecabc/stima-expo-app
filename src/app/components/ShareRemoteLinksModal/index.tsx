import { variables } from '@config'
import { Client } from '@/types/entities'
import { shareRemoteLink } from '@helpers'
import { Colors, Containers, FontSizes, Texts } from '@styles'
import { Container, CenteredModal } from '@components/ShareRemoteLinksModal/styles'

import React from 'react'
import { FlatList, Platform, Text, TouchableOpacity } from 'react-native'
import { ClipboardDocumentListIcon, UserIcon } from 'react-native-heroicons/outline'

interface ShareRemoteLinksModalProps {
  isFocused: boolean
  setFocus: (isFocused: boolean) => void
  client: Client
  userUid: string
}

export const ShareRemoteLinksModal = (props: ShareRemoteLinksModalProps) => {
  const { isFocused, setFocus, client, userUid } = props
  
  const closeModal = () => setFocus(false)

  client.phone = client.phone.replace(/\D/g, '')
  
  const origin = Platform.OS === 'web' ? window.location.origin : variables.domain 
  
  const remoteCreateEvaluationUrl = `${origin}/remote/create-evaluation?clientUid=${client.uid}&userUid=${userUid}`
  const remoteCreateEvaluationMessage = `Olá ${client.name}, como vai? \n\nAqui está o link para realizar sua avaliação personalizada remotamente: \n\n${remoteCreateEvaluationUrl}`
  const remoteCreateEvaluationWhatsappLink = `https://wa.me//${client.phone}?text=${encodeURIComponent(remoteCreateEvaluationMessage)}`
  
  const remoteClientUrl = `${origin}/remote/client?uid=${client.uid}`
  const remoteClientMessage = `Olá ${client.name}, como vai? \n\nAqui está o link para ver seus resultados: \n\n${remoteClientUrl}`
  const remoteClientWhatsappLink = `https://wa.me//${client.phone}?text=${encodeURIComponent(remoteClientMessage)}`

  const remoteLinksList = [
    {
      name: 'Link de preenchimento remoto de uma nova avaliação para o cliente',
      onPress: () => shareRemoteLink(remoteCreateEvaluationWhatsappLink, remoteCreateEvaluationMessage, remoteCreateEvaluationUrl),
      icon: <ClipboardDocumentListIcon color={Colors.darkGray} size={FontSizes.lg}/>
    },
    {
      name: 'Compartilhar link da pagina do cliente',
      onPress: () => shareRemoteLink(remoteClientWhatsappLink, remoteClientMessage, remoteClientUrl),
      icon: <UserIcon color={Colors.darkGray} size={FontSizes.lg}/> 
    }
  ]

  return (
    <CenteredModal
      isVisible={isFocused}
      onBackdropPress={closeModal}
      onSwipeComplete={closeModal}
      animationIn={'zoomIn'}
      animationOut={'zoomOut'}
      backdropOpacity={0.3}
    >
      <Container>
        <FlatList
          showsHorizontalScrollIndicator={false}
          style={{ flex: 1 , marginHorizontal: 20, paddingTop: 10 }}
          data={remoteLinksList}
          extraData={remoteLinksList}
          renderItem={({ item }) => 
            <TouchableOpacity onPress={item.onPress}>
              <Containers.ListItem>
                <Text style={Texts.md}>{item.name}</Text>
                {item.icon}
              </Containers.ListItem>
            </TouchableOpacity>
          }
          keyExtractor={(item: any) => item.name}
        />
      </Container>
    </CenteredModal>
  )
}
