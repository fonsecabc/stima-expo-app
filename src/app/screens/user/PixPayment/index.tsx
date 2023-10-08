import { HeaderTitle, Screen } from '@components'
import { Container } from '@screens/user/CreateEvaluation/styles'

import React, { useState } from 'react'
import { Image } from 'react-native'

type PixPaymentScreenProps = { 
  navigation: any
  route: any
}

export const PixPaymentScreen = ({ navigation, route }: PixPaymentScreenProps) => {
  const { accessToken, currentUser, order } = route.params
  const [isLoading, setLoading] = useState(false)
  
  return (
    <Screen background='gray'>
      <HeaderTitle navigation={navigation} goBack={true} title='Pix'/>
      <Container>
        <Image source={order.pixQrCode} style={{ width: 200, height: 200 }}/>
      </Container>
    </Screen>
  )
}