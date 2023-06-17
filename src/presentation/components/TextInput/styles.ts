import styled from 'styled-components/native'
import { Colors, Fonts } from '../../styles'

export const TextInputContainer = styled.KeyboardAvoidingView<{
    isFocused: boolean
    isValid?: boolean
    isRequired: boolean
  }>`
    margin: 20px
    margin-top: 5px
    margin-bottom: 5px
    padding: 20px
    height: ${Fonts.md * 2}px
    flex-direction: row
    align-items: center
    border-radius: 16px
    border-width: 2px
    border-color: ${({ isFocused, isValid, isRequired }) => (
        !isValid && isRequired ? Colors.red : isFocused ? Colors.lightBlue : Colors.lightGray
        
    )}
    background-color: ${Colors.lightGray}
`
export const TextInput = styled.TextInput`
    margin-right: auto
    color: ${Colors.darkGray}
    font-size: ${Fonts.md}px
    flex: 1
    outline-width: 0
`
  
export const HideIcon = styled.TouchableOpacity`
    margin-left: auto
    color: ${Colors.darkGray}
`