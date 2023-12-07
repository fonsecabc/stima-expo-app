import { Colors, FontSizes, Fonts } from '@styles'

import styled from 'styled-components/native'

export const Label = styled.Text`
  font-size: ${FontSizes.xl}px
  font-family: ${Fonts.semiBold}
  color: ${Colors.darkGray}
  text-align: left
  padding-horizontal: 5px
  margin-vertical: 10px
`

export const Title = styled.Text`
  font-size: ${FontSizes.md}px
  font-family: ${Fonts.medium}
  color: ${Colors.darkGray}
  text-align: left
`

export const Container = styled.View`
  width: 100%
  margin-top: 10px
  padding-left: 20px
  padding-right: 20px
`
