import { Colors, FontSizes } from '../../styles'

import styled from 'styled-components/native'

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