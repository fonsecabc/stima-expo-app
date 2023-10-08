import { Loader } from '@components'
import { ButtonContainer, ButtonText, IconContainer } from '@components/Button/styles'

import React from 'react'

interface ButtonProps {
  action: any
  text: string
  icon?: JSX.Element
  style?: any
  isDisabled?: boolean
  isLoading?: boolean
  type: 'default' | 'outline' | 'red'
}

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const { action, text, icon, style, isDisabled = false, isLoading, type } = props

  return (
    <ButtonContainer 
      style={style} 
      onPress={action} 
      disabled={isDisabled}
      type={type}
    >
      {isLoading ? <Loader /> : 
        <>
          <ButtonText 
            hasIcon={!!icon}
            type={type}
          >{text.toUpperCase()}</ButtonText>
          {icon && (
            <IconContainer>
              {icon}
            </IconContainer>
          )}
        </>
      }
    </ButtonContainer>

  )
}
