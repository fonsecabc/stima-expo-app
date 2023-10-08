import { Colors, FontSizes, Shadows, Fonts } from '@styles'

import styled from 'styled-components/native'

export const ButtonContainer = styled.TouchableOpacity`
  margin: 20px
  margin-vertical: 10px
  padding-horizontal: 20px
  height: ${FontSizes.md * 3}px
  flex-direction: row
  align-items: center
  justify-content: center
  border-radius: 40px
  background-color: ${({ type }: { type: 'default' | 'outline' }) => (type === 'outline' ? Colors.white : Colors.green)}
  border-color: ${Colors.green}
  border-width: 2px
  ${Shadows.default}
`

export const ButtonText = styled.Text<{
   type: 'default' | 'outline',
   hasIcon: boolean
  }>`
  color: ${({ type }: { type: 'default' | 'outline' }) => (type === 'outline' ? Colors.green : Colors.white)}
  font-family: ${Fonts.semiBold}
  font-size: ${FontSizes.md}px
  ${(hasIcon) => (!hasIcon ? 'margin-right: auto' : '')}
`

export const IconContainer = styled.View`
  margin-left: auto
  color: ${Colors.white}
`
