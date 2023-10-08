import { Colors, FontSizes, Fonts } from '@styles'

import styled from 'styled-components/native'

export const AvatarContainer = styled.View`
  border-radius: 100%
  background-color: ${Colors.gray}
  display: flex
  justify-content: center
  align-items: center
  width: ${FontSizes.md * 2}
  height: ${FontSizes.md * 2}
`

export const Letter = styled.Text`
  color: ${Colors.white}
  font-size: ${FontSizes.lg}px
  font-family: ${Fonts.bold}
`
