import { Colors, Fonts, Shadows } from '../../styles'

import styled from 'styled-components/native'

export const ButtonContainer = styled.TouchableOpacity`
  margin: 20px
  margin-vertical: 10px
  padding: 20px
  height: ${Fonts.md * 3}px
  flex-direction: row
  align-items: center
  justify-content: center
  border-radius: 40px
  background-color: ${Colors.green}
  ${Shadows.default}
`

export const ButtonText = styled.Text`
  color: ${Colors.white}
  font-weight: 500
  font-size: ${Fonts.md}px
  ${({ hasIcon }: {hasIcon: boolean}) => (hasIcon ? 'margin-right: auto' : '')}
`

export const IconContainer = styled.View`
  margin-left: auto
  color: ${Colors.white}
`
