import { Colors, FontSizes, Fonts } from '@styles'

import Modal from 'react-native-modal'
import styled from 'styled-components/native'

export const SelectInput = styled.TouchableOpacity<{
  isFocused: boolean
  isValid?: boolean
}>`
  margin-top: 5px
  margin-bottom: 0px
  padding-horizontal: 20px
  height: ${FontSizes.lg * 2}px
  flex-direction: row
  align-items: center
  justify-content: center
  border-radius: 16px
  border-width: 2px
  border-color: ${({ isFocused, isValid }) => (
    !isValid ? Colors.red : isFocused ? Colors.lightBlue : Colors.lightGray
      
  )}
  background-color: ${Colors.lightGray}
`

export const BottomModal = styled(Modal)`
  justify-content: flex-end
  margin: 0
`

export const Item = styled.TouchableOpacity`
  padding-horizontal: 20px
  height: ${FontSizes.lg * 2}px
  flex-direction: row
  align-items: center
  margin-bottom: 10px
  border-radius: 16px
  background-color: ${Colors.lightGray}
`

export const Placeholder = styled.Text`
  display: flex
  justify-content: space-between
  font-family: ${Fonts.regular}
  color: ${Colors.darkGray}
  font-size: ${FontSizes.md}px
  flex: 1
`
