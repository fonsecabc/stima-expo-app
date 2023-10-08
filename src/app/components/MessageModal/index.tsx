import { Button } from '@components'
import { 
  CenteredModal, 
  Container, 
  Description, 
  Title 
} from '@components/MessageModal/styles'

import React from 'react'

interface MessageModalProps {
  title: string
  description: string
  buttonText?: string
  buttonAction?: () => void
  isFocused: boolean
  setFocus: (isFocused: boolean) => void
}

export const MessageModal = (props: MessageModalProps) => {
  const { title, description, buttonText, isFocused, setFocus, buttonAction } = props

  const closeModal = () => setFocus(false)

  return (
    <CenteredModal
      isVisible={isFocused}
      onBackdropPress={closeModal}
      onSwipeComplete={closeModal}
      backdropOpacity={0.3}
    >
      <Container>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Button
          action={buttonAction ?? closeModal}
          text={buttonText ?? 'Entendi'}
          type='default'
        />
      </Container>
    </CenteredModal>
  )
}
