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

export const DisplayText = styled.Text`
  font-size: ${FontSizes.lg}px
  font-family: ${Fonts.bold}
  color: ${Colors.darkGray}
  text-align: left
  margin-top: 15px
`

export const DisplayLabel = styled.Text`
  font-size: ${FontSizes.md}px
  font-family: ${Fonts.medium}
  color: ${Colors.darkGray}
  text-align: left
`

export const DisplayState = styled.Text<{
  state: 'abaixo' | 'acima' | 'muito acima' | 'normal'
}>`
  font-size: ${FontSizes.sm}px
  font-family: ${Fonts.bold}
  color: ${({ state }) => state === 'abaixo' ? Colors.yellow 
    : state === 'acima' ? Colors.orange 
      :  state === 'muito acima' ? Colors.red 
        : Colors.green }
  text-align: left
`

export const DisplayDescription = styled.Text`
  font-size: ${FontSizes.sm}px
  font-family: ${Fonts.medium}
  color: ${Colors.black}
  text-align: left
`

export const Label = styled.Text`
  font-size: ${FontSizes.xl}px
  font-family: ${Fonts.semiBold}
  color: ${Colors.darkGray}
  text-align: left
  margin-top: 20px
  margin-horizontal: 20px
`