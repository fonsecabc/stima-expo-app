import { Colors, Shadows, Fonts } from '../../styles'

import styled from 'styled-components/native'

export const SearchBarContainer = styled.KeyboardAvoidingView`
  flex-direction: row
  align-items: center
  justify-content: space-between
`

export const SearchInputContainer = styled.View`
  flex: 1
  margin: 20px
  margin-vertical: 10px
  padding: 20px
  height: ${Fonts.md * 3}px
  flex-direction: row
  align-items: center
  border-radius: 16px
  background-color: ${Colors.white}
  ${Shadows.default}
`

export const SearchTextInput = styled.TextInput`
  margin-right: auto
  color: ${Colors.darkGray}
  font-weight: 500
  font-size: ${Fonts.md}px
  flex: 1
  outline-width: 0
`

export const SearchIcon = styled.TouchableOpacity`
  margin-right: 20px
  padding: 10px
  padding-right: 20px
  padding-left: 20px
  height: ${Fonts.md * 3}px
  border-radius: 16px
  color: ${Colors.white}
  background-color: ${Colors.green}
  ${Shadows.default}
`