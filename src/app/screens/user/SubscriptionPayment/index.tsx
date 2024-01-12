import { 
  Description, 
  Title, 
  Container, 
  SubscriptionContainer, 
  SubscriptionTitle, 
  SubscriptionDescription, 
  TextContainer, 
  IconContainer
} from '@screens/user/SubscriptionPayment/styles'
import { Card } from '@entities'
import { SubscriptionType, PaymentMethod } from '@enums'
import { Colors, FontSizes } from '@styles'
import { cardForm, addressForm } from '@forms'
import { createSubscription as createSubscriptionRequest } from '@requests'
import { Button, HeaderTitle, Screen, ProgressBar, Form } from '@components'

import React, { useState } from 'react'
import { CheckCircleIcon } from 'react-native-heroicons/solid'
import { PlusCircleIcon } from 'react-native-heroicons/outline'
import Toast from 'react-native-toast-message'

type SubscriptionPaymentScreenProps = { 
  navigation: any
  route: any
}

export const SubscriptionPaymentScreen = ({ navigation, route }: SubscriptionPaymentScreenProps) => {
  const { accessToken, currentUser } = route.params
  const [isLoading, setLoading] = useState(false)
  const [formProgress, setFormProgress] = useState(0.50)

  const [formValues, setFormValues] = useState({
    card: {} as Card,
    billingAddress: {},
    paymentMethod: PaymentMethod.CREDIT_CARD
  })

  const [subscriptionType, setSubscriptionType] = useState<SubscriptionType>()
  
  const isMonthly = subscriptionType === SubscriptionType.MONTHLY
  const isYearly = subscriptionType === SubscriptionType.YEARLY

  const createSubscription = async () => {
    if (!subscriptionType || !formValues.card) return 

    setLoading(true)
    const response = await createSubscriptionRequest({
      userUid: currentUser.uid,
      customerUid: currentUser.customerUid,
      accessToken,
      paymentMethod: formValues.paymentMethod,
      subscriptionType,
      card: formValues.card,
    })
    setLoading(false)
    if (response instanceof Error || !response.body) return

    Toast.show({ type: 'success', text1: 'Plano criado com sucesso' })
    
    return navigation.navigate('Evaluations')
  }

  const getIconColor = (isFocused: boolean) => {
    return isFocused ? Colors.white : Colors.darkGray
  }

  return (
    <Screen background='gray'>
      <HeaderTitle navigation={navigation} title='Planos'/>
      <ProgressBar 
        progress={formProgress}
        label={`${formProgress * 100}% Quase lá!`}
      />
      <Container>
        {
          formProgress === 0.50 && (
            <>
              <Title>Continue usando nosso sistema!</Title>
              <Description>
                Sem compromisso.{'\n'}Cancele a qualquer momento.
              </Description>
              <SubscriptionContainer
                onPress={() => setSubscriptionType(SubscriptionType.MONTHLY)}
                isFocused={isMonthly}
              >
                <TextContainer>
                  <SubscriptionTitle isFocused={isMonthly}>Plano mensal</SubscriptionTitle>
                  <SubscriptionDescription isFocused={isMonthly}>R$79,90/mês.{'\n'}Cobrança mensal.</SubscriptionDescription>
                </TextContainer>
                <IconContainer>
                  {isMonthly ? <CheckCircleIcon size={FontSizes.xl2} color={getIconColor(isMonthly)}/> : <PlusCircleIcon size={FontSizes.xl2} color={getIconColor(isMonthly)}/>}
                </IconContainer>
              </SubscriptionContainer>
              <SubscriptionContainer
                onPress={() => setSubscriptionType(SubscriptionType.YEARLY)}
                isFocused={isYearly}
              >
                <TextContainer>
                  <SubscriptionTitle isFocused={isYearly}>Plano anual</SubscriptionTitle>
                  <SubscriptionDescription isFocused={isYearly}>R$69,99/mês.{'\n'}Cobrança anual.</SubscriptionDescription>
                </TextContainer>
                <IconContainer>
                  {isYearly ? <CheckCircleIcon size={FontSizes.xl2} color={getIconColor(isYearly)}/> : <PlusCircleIcon size={FontSizes.xl2} color={getIconColor(isYearly)}/>}
                </IconContainer>
              </SubscriptionContainer>
              <Description>O plano é renovado automaticamente.</Description>
              <Button
                action={() => setFormProgress(0.75)}
                text='Continuar'
                type='default'
                isDisabled={!subscriptionType}
                style={{ marginTop: 30 }}
              />
            </>
          )
        }
        {
          formProgress === 0.75 && <Form
            title='Forma de pagamento'
            inputs={cardForm}
            submitAction={(params) => { 
              setFormValues({ ...formValues, card: params, paymentMethod: params.paymentMethod })
              setFormProgress(0.99)
            }}
            goBack={() => setFormProgress(0.50)}
            isMultipage={true}
            canGoBack={true}
            buttonText='CONTINUAR'
            isLoading={isLoading}
            values={formValues.card}
          />
        }
        {
          formProgress === 0.99 && <Form
            title='Endereço de cobrança'
            inputs={addressForm}
            submitAction={(params) => { 
              setFormValues({ ...formValues, billingAddress: params })
              createSubscription()
            }}
            goBack={() => setFormProgress(0.75)}
            isMultipage={true}
            canGoBack={true}
            buttonText='FINALIZAR'
            isLoading={isLoading}
            values={formValues.card}
          />
        }
      </Container>
    </Screen>
  )
}
