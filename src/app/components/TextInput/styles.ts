import { Colors, FontSizes, Fonts } from '../../styles'

import styled from 'styled-components/native'
import { MaskedTextInput } from 'react-native-mask-text'


export const TextInputContainer = styled.View<{
    isFocused: boolean
    isValid?: boolean
  }>`
    margin: 20px
    margin-top: 5px
    margin-bottom: 0px
    padding-horizontal: 20px
    height: ${FontSizes.lg * 2}px
    flex-direction: row
    align-items: center
    border-radius: 16px
    border-width: 2px
    border-color: ${({ isFocused, isValid }) => (
    !isValid ? Colors.red : isFocused ? Colors.lightBlue : Colors.lightGray
        
  )}
    background-color: ${Colors.lightGray}
`
export const TextInput = styled.TextInput`
    margin-right: auto
    color: ${Colors.darkGray}
    font-size: ${FontSizes.md}px
    flex: 1
    outline-width: 0
`

export const MaskTextInput = styled(MaskedTextInput)`
    margin-right: auto
    color: ${Colors.darkGray}
    font-size: ${FontSizes.md}px
    flex: 1
    outline-width: 0
`
  
export const HideIcon = styled.TouchableOpacity`
    margin-left: auto
    color: ${Colors.darkGray}
`

export const Label = styled.Text`
    padding-horizontal: 5px
    font-size: ${FontSizes.md}px
    font-family: ${Fonts.medium}
    color: ${Colors.darkGray}
    text-align: left
    margin-top: 20px
    margin-horizontal: 20px
`

export const DescriptionText = styled.Text`
    padding-horizontal: 5px
    font-size: ${FontSizes.xs}px
    font-family: ${Fonts.light}
    color: ${Colors.darkGray}
    text-align: left
    margin-horizontal: 20px
`

export const ErrorText = styled.Text`
    padding-horizontal: 5px
    font-size: ${FontSizes.xs}px
    font-family: ${Fonts.medium}
    color: ${Colors.red}
    text-align: left
    margin-horizontal: 20px
`