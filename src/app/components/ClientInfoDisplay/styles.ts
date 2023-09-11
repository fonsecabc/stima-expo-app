import { Colors, FontSizes, Fonts, Shadows } from '../../styles'

import styled from 'styled-components/native'

export const Container = styled.View`
  background-color: ${Colors.white}
  margin-horizontal: 20px
  margin-vertical: 10px
  border-radius: 16px
  padding: 20px
  ${Shadows.default}
`

export const Title = styled.Text`
  font-size: ${FontSizes.xl}px
  font-family: ${Fonts.semiBold}
  color: ${Colors.darkGray}
  text-align: left
`

export const Text = styled.Text`
  font-size: ${FontSizes.md}px
  font-family: ${Fonts.medium}
  color: ${Colors.darkGray}
  text-align: left
`

export const Description = styled.Text`
  font-size: ${FontSizes.sm}px
  font-family: ${Fonts.regular}
  color: ${Colors.darkGray}
`
