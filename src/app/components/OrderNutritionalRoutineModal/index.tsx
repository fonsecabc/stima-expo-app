import { 
  BottomModal, 
  Container, 
  Description, 
  Price, 
  TextContainer, 
  Title 
} from '@components/OrderNutritionalRoutineModal/styles'
import { PaymentMethod } from '@enums'
import { Card, Order, User } from '@entities'
import { Button, CustomSelectInput } from '@components'
import { orderNutritionalRoutine as orderNutritionalRoutineRequest  } from '@requests'

import React, { useState } from 'react'

interface OrderNutritionalRoutineModalProps {
  evaluationUid: string
  accessToken: string
  currentUser: User
  navigation: any
}

export const OrderNutritionalRoutineModal = (props: OrderNutritionalRoutineModalProps) => {
  const { evaluationUid, accessToken, currentUser, navigation } = props
  
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>(PaymentMethod.PIX)
  const [isOrdering, setIsOrdering] = useState(false)
  const [order, setOrder] = useState<Order>()
  const [isFocused, setFocus] = useState(false)

  const orderNutritionalRoutine = async () => {
    setIsOrdering(true)

    console.log({
      accessToken,
      evaluationUid,
      paymentMethod,
      customerUid: currentUser.customerUid
    })

    const response: any = await orderNutritionalRoutineRequest({
      accessToken,
      evaluationUid,
      paymentMethod,
      customerUid: currentUser.customerUid
    })
    setIsOrdering(false)

    if (response instanceof Error) return setFocus(false)

    setOrder(response.body)
    return navigation.navigate('Pix Payment', { order })
  }

  return (
    <>
      <Button
        text='Pedir Rotina Nutricional'
        action={() => setFocus(true)}
        style={{ marginBottom: 0 }}
        type='default'
      />
      <BottomModal
        isVisible={isFocused}
        onBackdropPress={() => setFocus(false)}
        onSwipeComplete={() => setFocus(false)}
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
              { key: 'Cartão de crédito', value: 'creditCard' },
              { key: 'Cartão de débito', value: 'debitCard' },
            ]}
            placeholder='Selecione'
          />
          <Button
            text='Continuar'
            action={orderNutritionalRoutine}
            style={{ marginRight: 0, marginLeft: 0, marginTop: 40 }}
            type='default'
            isLoading={isOrdering}
          />
        </Container>
      </BottomModal>
    </>
  )
}
