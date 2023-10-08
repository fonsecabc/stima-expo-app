import { Colors, FontSizes, Fonts } from '@styles'

import styled from 'styled-components/native'

export const Text = styled.Text`
  font-size: ${FontSizes.sm}px
  color: ${Colors.darkGray}
  text-align: center
  margin: 5px
  ${({ isLink }: { isLink: boolean }) => (isLink &&  `
    color: ${Colors.lightBlue}
    font-family: ${Fonts.medium}
  `)}
`