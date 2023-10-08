import { Colors, FontSizes, Fonts } from '@styles'

import styled from 'styled-components/native'

export const Label = styled.Text`
  font-size: ${FontSizes.xl}px
  font-family: ${Fonts.semiBold}
  color: ${Colors.darkGray}
  text-align: left
  padding-horizontal: 5px
  margin-top: 20px
  margin-horizontal: 20px
`

export const Title = styled.Text`
  font-size: ${FontSizes.md}px
  font-family: ${Fonts.medium}
  color: ${Colors.darkGray}
  text-align: left
`

export const Text = styled.Text`
  font-size: ${FontSizes.md}px
  font-family: ${Fonts.medium}
  color: ${Colors.darkGray}
  text-align: left
`
