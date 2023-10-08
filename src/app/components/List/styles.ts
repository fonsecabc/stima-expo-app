import { Colors, FontSizes, Fonts } from '@styles'

import styled from 'styled-components/native'

export const EmptyListItem = styled.View`
  display: flex
  align-items: flex-start
  justify-content: center
  marginb-bottom: 10px
  padding-horizontal: 20px
  height: ${FontSizes.md * 3}
  border-radius: 16px
  background-color: ${Colors.white}
`

export const EmptyListItemText = styled.Text`
  font-size: ${FontSizes.md}px
  color: ${Colors.darkGray}
  font-family: ${Fonts.medium}
`