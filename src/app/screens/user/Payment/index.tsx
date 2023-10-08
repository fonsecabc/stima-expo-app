import { Button, CopyText, MessageModal, HeaderTitle, ProgressBar, Screen } from '@components'
import { Description, Image, Title, Container } from '@screens/user/Payment/styles'

import React, { useState, useEffect } from 'react'


type PaymentScreenProps = { 
  navigation: any
  route: any
}

export const PaymentScreen = ({ navigation, route }: PaymentScreenProps) => {
  const { order } = route.params
  const [isConfirmedPaymentModalFocused, setConfirmedPaymentModalFocus] = useState(false)

  const [timeLeft, setTimeLeft] = useState(300)

  useEffect(() => {
    if (!timeLeft) return

    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1)
    }, 1000)

    return () => clearInterval(intervalId)
  }, [timeLeft])

  const progress = timeLeft / 300
  const label = `Tempo para pagar: ${Math.floor(timeLeft / 60)}:${timeLeft % 60 < 10 ? '0' : ''}${timeLeft % 60}`

  const modalAction = () => {
    setConfirmedPaymentModalFocus(false)
    navigation.goBack()
  }

  return (
    <Screen background='gray'>
      <HeaderTitle navigation={navigation} goBack={true} title='Pagamento'/>
      <ProgressBar progress={progress} label={label}/>
      <Container>
        <Title>Pedido aguardando pagamento</Title>
        <Description>Copie o código abaixo e ultilize o Pix Copia e Cola no aplicátivo que você vai fazer o pagamento: </Description>
        <CopyText
          text={order.pixPaymentLink}
        />
        <Description>Ou escaneie o QR Code abaixo: </Description>
        <Image source={{ uri: order.pixQrCode }}/>
        <Button
          action={() => setConfirmedPaymentModalFocus(true)}
          text='Confirmar pagamento'
          type='default'
          style={{ marginTop: 0, marginBottom: 10 }}
        />
      </Container>
      <MessageModal
        title='Pagemento confirmado!'
        description='O pagamento pode demorar até 5 minutos para refletir na aplicação, caso não seja refletido, entre em contato com o suporte.'
        isFocused={isConfirmedPaymentModalFocused}
        setFocus={setConfirmedPaymentModalFocus}
        buttonAction={modalAction}
      />
    </Screen>
  )
}
