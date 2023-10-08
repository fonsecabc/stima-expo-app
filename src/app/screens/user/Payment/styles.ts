import { Colors, FontSizes, Fonts, Shadows } from '@styles'

import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1
  margin: 20px
  margin-bottom: 60px
  padding: 20px
  border-radius: 16px
  background-color: ${Colors.white}
  ${Shadows.default}
`

export const Title = styled.Text`
  font-size: ${FontSizes.xl}px
  font-family: ${Fonts.semiBold}
  margin: 10px
  color: ${Colors.darkGray}
  text-align: center
`

export const Description = styled.Text`
  font-size: ${FontSizes.md}px
  font-family: ${Fonts.regular}
  color: ${Colors.darkGray}
  text-align: center
`

export const Image = styled.Image`
  flex: 1
  margin-vertical: 10px
  resize-mode: contain
`