import { ButtonContainer } from '@components/IconButton/styles'

import React from 'react'

interface IconButtonProps {
  action: any
  icon?: JSX.Element
  style?: any
  isDisabled?: boolean
  type: 'default' | 'outline' | 'red'
}

export const IconButton: React.FC<IconButtonProps> = (props: IconButtonProps) => {
  const { action, icon, style, isDisabled = false, type } = props

  return (
    <ButtonContainer 
      style={style} 
      onPress={action} 
      disabled={isDisabled}
      type={type}
    >
      {icon}
    </ButtonContainer>

  )
}
