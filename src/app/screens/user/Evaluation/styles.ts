import { Colors, FontSizes, Fonts, Shadows } from '@styles'

import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1
  background-color: ${Colors.white}
  margin-horizontal: 20px
  margin-top: 10px
  border-radius: 16px
  padding: 20px
  ${Shadows.default}
`

export const Text = styled.Text`
  font-size: ${FontSizes.lg}px
  font-family: ${Fonts.semiBold}
  color: ${Colors.darkGray}
`

export const Description = styled.Text`
  font-size: ${FontSizes.md}px
  font-family: ${Fonts.medium}
  color: ${Colors.darkGray}
  text-align: left
`

export const Label = styled.Text`
  font-size: ${FontSizes.xl}px
  font-family: ${Fonts.semiBold}
  color: ${Colors.darkGray}
  text-align: left
  padding-horizontal: 5px
  margin-top: 20px
  margin-horizontal: 20px
`