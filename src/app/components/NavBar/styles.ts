import { Colors, Shadows, Fonts } from '@styles'

import { Platform } from 'react-native'
import styled from 'styled-components/native'

export const NavBarContainer = styled.View`
  margin-top: auto
  background-color: ${Colors.white}
  padding: 10px
  padding-bottom: ${Platform.OS === 'web' ? 10 : 30}px
  flex-direction: row
  align-items: center
  ${Shadows.default}
`
export const NavButton = styled.TouchableOpacity`
  flex: 1
  justify-content: center
  align-items: center
  color: ${({ isActive }: { isActive: boolean }) => (isActive ? Colors.lightBlue : Colors.darkGray)}
`

export const IconText = styled.Text`
  color: ${({ isActive }: { isActive: boolean }) => (isActive ? Colors.lightBlue : Colors.darkGray)}
  font-family: ${Fonts.medium}
`