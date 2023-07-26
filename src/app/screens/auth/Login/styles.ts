import { width } from '../../../styles/Screen'
import { Colors, Shadows, FontSizes, Fonts } from '../../../styles'

import styled from 'styled-components/native'

export const Container = styled.View`
  margin: 20px
  margin-bottom: 60px
  padding: 20px
  border-radius: 16px
  background-color: ${Colors.white}
  align-content: center
  max-width: ${width}px
  ${Shadows.default}
`

export const Text = styled.Text`
  font-size: ${FontSizes.sm}px
  color: ${Colors.darkGray}
  text-align: center
  margin: 5px
  ${({ isLink }: { isLink: boolean }) => (!isLink ? '' : `
    color: ${Colors.lightBlue}
    font-family: ${Fonts.medium}
  `)}
`