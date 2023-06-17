import { Colors, Shadows, Fonts } from '../../../styles'

import styled from 'styled-components/native'

export const Container = styled.View`
  margin: 20px
  padding: 20px
  border-radius: 16px
  background-color: ${Colors.white}
  align-self: center
  align-content: center
  justify-content: center
  ${Shadows.default}
`

export const Title = styled.Text`
  font-size: ${Fonts.xl}px
  font-weight: 500
  margin: 15px
  color: ${Colors.darkGray}
  text-align: center
`

export const Text = styled.Text`
  font-size: ${Fonts.sm}px
  color: ${Colors.darkGray}
  text-align: center
  margin-horizontal: 5px
  ${({ isLink }: { isLink: boolean }) => (!isLink ? '' : `
    border-bottom-width: 1px
    border-bottom-color: ${Colors.lightBlue}
    color: ${Colors.lightBlue}
    font-weight: 500
  `)}
`