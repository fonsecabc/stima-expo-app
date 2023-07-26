import { Colors, FontSizes, Fonts, Shadows } from '../../../styles'

import styled from 'styled-components/native'

export const Container = styled.View`
  margin: 20px
  display: flex
  flex-direction: row
  justify-content: space-between
`

export const Display = styled.View`
  border-radius: 16px
  background-color: ${Colors.white}
  padding: 20px
  flex: 0.48
  ${Shadows.default}
`

export const Label = styled.Text`
  font-size: ${FontSizes.xl}px
  font-family: ${Fonts.medium}
  color: ${Colors.darkGray}
  text-align: left
  margin-top: 20px
  margin-horizontal: 20px
`