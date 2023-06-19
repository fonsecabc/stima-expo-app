import React from 'react'
import { ButtonContainer, ButtonText, IconContainer } from './styles'
import { Loader } from '../Loader'

interface ButtonProps {
  action: any
  text: string
  icon?: JSX.Element
  style?: any
  isDisabled?: boolean
  isLoading?: boolean
}

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
    const { action, text, icon, style, isDisabled, isLoading } = props

    return (
        <ButtonContainer style={style} onPress={action} disabled={isDisabled}>
            {isLoading ? <Loader /> : 
                <>
                    <ButtonText hasIcon={!!icon}>{text.toUpperCase()}</ButtonText>
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
