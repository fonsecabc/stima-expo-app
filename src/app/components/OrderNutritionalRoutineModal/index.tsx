import { 
  BottomModal, 
  Container, 
  Description, 
  Price, 
  TextContainer, 
  Title 
} from '@components/OrderNutritionalRoutineModal/styles'
import { User } from '@entities'
import { Button, CustomSelectInput } from '@components'
import { NutritionalRoutineStatus, PaymentMethod, PaymentStatus } from '@enums'
import { orderNutritionalRoutine as orderNutritionalRoutineRequest  } from '@requests'

import React, { useState } from 'react'
import { Linking } from 'react-native'

interface OrderNutritionalRoutineModalProps {
  evaluationUid: string
  accessToken: string
  currentUser: User
  navigation: any
  nutritionalRoutineStatus: NutritionalRoutineStatus
  nutritionalRoutinePaymentStatus?: PaymentStatus 
  nutritionalRoutineLink?: string
}

export const OrderNutritionalRoutineModal = (props: OrderNutritionalRoutineModalProps) => {
  const { evaluationUid, accessToken, currentUser, navigation, nutritionalRoutinePaymentStatus, nutritionalRoutineStatus, nutritionalRoutineLink } = props
  
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>(PaymentMethod.PIX)
  const [isLoading, setIsLoading] = useState(false)
  const [isOrderNutritionalRoutineModalFocused, setOrderNutritionalRoutineModalFocus] = useState(false)

  const orderNutritionalRoutine = async () => {
    setIsLoading(true)

    const response = await orderNutritionalRoutineRequest({
      accessToken,
      evaluationUid,
      paymentMethod,
      customerUid: currentUser.customerUid
    })
    setIsLoading(false)
    setOrderNutritionalRoutineModalFocus(false) 
    
    if (response instanceof Error) return 
    return navigation.navigate('Payment', { order: response.body })
  }

  const contactSuport = () => {
    Linking.openURL('https://wa.me//5531983904021?text=Pagamento%20da%20rotina%20nutricional%20falhou%20no%20Stima!%0A%0AUid%20da%20avaliacao:%20' + evaluationUid)
  }

  if (
    nutritionalRoutineStatus === NutritionalRoutineStatus.REQUESTED &&
    nutritionalRoutinePaymentStatus === PaymentStatus.PENDING
  ) {
    return  (
      <Button
        text='Pagamento da rotina pendente'
        type='default'
        isDisabled={true}
        action={() => {}}
      />
    )
  }

  if (
    nutritionalRoutineStatus === NutritionalRoutineStatus.REQUESTED &&
    nutritionalRoutinePaymentStatus === PaymentStatus.PAID && 
    nutritionalRoutineLink
  ) {
    return  (
      <Button
        text='Rotina sendo feita pela nutricionista'
        type='default'
        isDisabled={true}
        action={() => {}}
      />
    )
  }

  if (
    nutritionalRoutineStatus === NutritionalRoutineStatus.RECEIVED &&
    nutritionalRoutinePaymentStatus === PaymentStatus.PAID &&
    nutritionalRoutineLink
  ) {
    return  (
      <Button
        text='Abrir rotina nutricional'
        type='default'
        action={() => Linking.openURL(nutritionalRoutineLink)}
      />
    )
  }

  return (
    <>
      {(
        nutritionalRoutineStatus === NutritionalRoutineStatus.REQUESTED &&
        nutritionalRoutinePaymentStatus === PaymentStatus.FAILED
      ) && (
        <Button
          text='Pagamento da rotina falhou'
          type='red'
          action={contactSuport}
        />
      )}


      {(
        nutritionalRoutineStatus === NutritionalRoutineStatus.NOT_REQUESTED
      ) && (
        <Button
          text='Pedir Rotina Nutricional'
          action={() => setOrderNutritionalRoutineModalFocus(true)}
          style={{ marginBottom: 0 }}
          type='default'
        />
      )}

      <BottomModal
        isVisible={isOrderNutritionalRoutineModalFocused}
        onBackdropPress={() => setOrderNutritionalRoutineModalFocus(false)}
        onSwipeComplete={() => setOrderNutritionalRoutineModalFocus(false)}
        backdropOpacity={0.3}
      >
        <Container>
          <Title>Pedir Rotina Nutricional</Title>
          
          <TextContainer>
            <Description>1x Rotina nutricional</Description>
            <Price>R$ 45,00</Price>
          </TextContainer>
          <CustomSelectInput
            label='Forma de pagamento'
            value={paymentMethod}
            setValue={setPaymentMethod}
            items={[
              { key: 'Pix', value: 'pix' },
              //{ key: 'Cartão de crédito', value: 'creditCard' },
              //{ key: 'Cartão de débito', value: 'debitCard' },
            ]}
            placeholder='Selecione'
          />
          <Button
            text='Continuar'
            action={orderNutritionalRoutine}
            style={{ marginRight: 0, marginLeft: 0, marginTop: 40 }}
            type='default'
            isLoading={isLoading}
          />
        </Container>
      </BottomModal>
    </>
  )
}
