import { Button } from '@components'
import { 
  CenteredModal, 
  Container, 
  Description, 
  Title 
} from '@components/StartEvaluationModal/styles'

import React from 'react'

interface StartEvaluationModalProps {
  isFocused: boolean
  isDoneAction: () => void
  setFocus: (focus: boolean) => void
  setNutritionalRoutine: (choice: boolean) => void
}

export const StartEvaluationModal = (props: StartEvaluationModalProps) => {
  const { setNutritionalRoutine, isFocused, setFocus, isDoneAction } = props

  const closeModal = () => setFocus(false)

  return (
    <CenteredModal
      isVisible={isFocused}
      onBackdropPress={closeModal}
      onSwipeComplete={closeModal}
      backdropOpacity={0.3}
    >
      <Container>
        <Title>Pedir rotina nutricional?</Title>
        <Description>
            Feita para guiar a nutrição, a rotina nutricional é personalizada para as necessidades e objetivos do seu cliente.
        </Description>
        <Button
          action={() => {
            setNutritionalRoutine(true)
            isDoneAction()
            closeModal()
          }}
          text='Sim'
          type='default'
        />
        <Button
          action={() => {
            setNutritionalRoutine(false)
            isDoneAction()
            closeModal()
          }}
          text='Não'
          type='outline'
          style={{ 
            marginTop: 20, 
            marginRight: 60, 
            marginLeft: 60,
          }}
        />
      </Container>
    </CenteredModal>
  )
}
