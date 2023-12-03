import { Colors, FontSizes, Fonts } from '@styles'

import styled from 'styled-components/native'
import { MaskedTextInput } from 'react-native-mask-text'

export const TextInputContainer = styled.View<{
  isFocused: boolean
  isValid?: boolean
}>`
  margin-top: 5px
  margin-bottom: 0px
  height: ${FontSizes.xl * 2}px
  flex-direction: row
  align-items: center
  border-radius: 16px
  padding-horizontal: 20px
  border-width: 2px
  border-color: ${({ isFocused, isValid }) => (
    !isValid ? Colors.red : isFocused ? Colors.lightBlue : Colors.lightGray
  )}
  background-color: ${Colors.lightGray}
`

export const TextInput = styled.TextInput`
  height: ${FontSizes.xl * 2}px
  flex-direction: row
  align-items: center
  border-width: 0px
  outline-width: 0px
  width: 100%
  hover: background-color: transparent
`

export const MaskTextInput = TextInput.withComponent(MaskedTextInput)

export const HideIcon = styled.TouchableOpacity`
  margin-left: auto
  color: ${Colors.darkGray}
`

export const Label = styled.Text`
  font-size: ${FontSizes.lg}px
  font-family: ${Fonts.medium}
  color: ${Colors.darkGray}
  text-align: left
  margin-top: 20px
`

export const DescriptionText = styled.Text`
  font-size: ${FontSizes.xs}px
  font-family: ${Fonts.light}
  color: ${Colors.darkGray}
  text-align: left
`

export const ErrorText = styled.Text`
  font-size: ${FontSizes.xs}px
  font-family: ${Fonts.medium}
  color: ${Colors.red}
  text-align: left
  margin-top: 3px
  margin-horizontal: 20px
`