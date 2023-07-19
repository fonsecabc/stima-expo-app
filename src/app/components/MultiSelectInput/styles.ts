import { Colors, FontSizes, Fonts } from '../../styles'

import Modal from 'react-native-modal'
import styled from 'styled-components/native'

export const SelectInput = styled.TouchableOpacity<{
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

export const ListContainer = styled.FlatList`
  background-color: ${Colors.white}
  padding: 20px
  max-height: 20%
  border-radius: 16px
  overflow-x: scroll
`

export const Item = styled.TouchableOpacity<{
  isSelected: boolean
}>`
  padding-horizontal: 20px
  height: ${FontSizes.lg * 2}px
  flex-direction: row
  align-items: center
  margin-bottom: 10px
  border-radius: 16px
  border-width: ${({ isSelected }) => (isSelected ? '2px' : '0px')}
  border-color: ${({ isSelected }) => (isSelected ? Colors.lightBlue : Colors.lightGray)}
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

export const Label = styled.Text`
  padding-horizontal: 5px
  font-size: ${FontSizes.md}px
  font-family: ${Fonts.medium}
  color: ${Colors.darkGray}
  text-align: left
  margin-top: 20px
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