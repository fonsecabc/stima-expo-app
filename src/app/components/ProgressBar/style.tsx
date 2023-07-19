import { Colors, FontSizes, Fonts } from '../../styles'

import styled from 'styled-components/native'

export const Label = styled.Text`
  padding-horizontal: 5px
  font-size: ${FontSizes.lg}px
  font-family: ${Fonts.medium}
  color: ${Colors.darkGray}
  text-align: left
  margin-top: 10px
  margin-horizontal: 20px
`