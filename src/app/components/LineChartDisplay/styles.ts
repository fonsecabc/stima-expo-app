import { Colors, FontSizes, Fonts, Shadows } from '../../styles'

import styled from 'styled-components/native'

export const Display = styled.View`
  border-radius: 16px
  background-color: ${Colors.white}
  padding: 20px
  flex: 1
  margin-horizontal: 10px
  ${Shadows.default}
`

export const Container = styled.View`
  display: flex
  flex-direction: row
  margin: 10px
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
