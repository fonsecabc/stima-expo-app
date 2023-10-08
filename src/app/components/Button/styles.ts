import { Colors, FontSizes, Shadows, Fonts } from '@styles'

import styled from 'styled-components/native'

const outlineStyle = `
  background-color: ${Colors.white}
  border-color: ${Colors.green}
` 

const defaultStyle = `
  background-color: ${Colors.green}
  border-color: ${Colors.green}
`

const redStyle = `
  background-color: ${Colors.red}
  border-color: ${Colors.red}
`

const disabledStyle = `
  background-color: ${Colors.gray}
  border-color: ${Colors.gray}
`

const currentStyle = (type: 'default' | 'outline' | 'red', disabled: boolean) => {
  return disabled ? disabledStyle
    : type === 'outline' ? outlineStyle
      : type === 'red' ? redStyle
        : defaultStyle
}

export const ButtonContainer = styled.TouchableOpacity<{
  type: 'default' | 'outline' | 'red',
  disabled: boolean
}>`
  margin: 20px
  margin-vertical: 10px
  padding-horizontal: 20px
  height: ${FontSizes.md * 3}px
  flex-direction: row
  align-items: center
  justify-content: center
  border-radius: 40px
  border-width: 2px
  ${(props) => currentStyle(props.type, props.disabled)}
  ${Shadows.default}
`

export const ButtonText = styled.Text<{
   type: 'default' | 'outline' | 'red',
   hasIcon: boolean
  }>`
  color: ${({ type }) => (type === 'outline' ? Colors.green : Colors.white)}
  font-family: ${Fonts.semiBold}
  font-size: ${FontSizes.md}px
  ${(hasIcon) => (!hasIcon ? 'margin-right: auto' : '')}
`

export const IconContainer = styled.View`
  margin-left: auto
  color: ${Colors.white}
`
