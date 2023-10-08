import { 
  Display,
  DisplayLabel,
  DisplayText,
  DisplayDescription,
  DisplayState
} from '@components/NumberDisplay/styles'

import React from 'react'

interface NumberDisplayProps {
  title: string
  description: string
  number: number | string
  state?: 'normal' | 'acima' | 'muito acima' | 'abaixo'
}

export const NumberDisplay = (props: NumberDisplayProps) => {
  const { title, number, description, state = '' } = props

  return (
    <Display>
      <DisplayLabel>{title}</DisplayLabel>
      <DisplayState state={state}>{state.charAt(0).toUpperCase() + state.slice(1)}</DisplayState>
      <DisplayText>{number}<DisplayDescription> {description}</DisplayDescription></DisplayText>
    </Display>
  )
}
