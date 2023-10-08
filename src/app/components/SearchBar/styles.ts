import { Colors, Shadows, FontSizes, Fonts } from '@styles'

import styled from 'styled-components/native'

export const SearchBarContainer = styled.KeyboardAvoidingView`
  flex-direction: row
  align-items: center
  justify-content: space-between
`

export const SearchInputContainer = styled.View`
  flex: 1
  margin-left: 20px
  margin-right: 10px
  margin-vertical: 10px
  padding-horizontal: 20px
  height: ${FontSizes.md * 3}px
  flex-direction: row
  align-items: center
  border-radius: 16px
  background-color: ${Colors.white}
  ${Shadows.default}
`

export const SearchTextInput = styled.TextInput`
  margin-right: auto
  color: ${Colors.darkGray}
  font-family: ${Fonts.medium}
  font-size: ${FontSizes.md}px
  flex: 1
  outline-width: 0
`

export const SearchIcon = styled.TouchableOpacity`
  margin-right: 20px
  padding: 10px
  padding-right: 20px
  padding-left: 20px
  justify-content: center
  height: ${FontSizes.md * 3}px
  border-radius: 16px
  color: ${Colors.white}
  background-color: ${Colors.green}
  ${Shadows.default}
`