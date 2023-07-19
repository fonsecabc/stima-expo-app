import { Colors, Shadows, FontSizes, Fonts } from '../../../styles'

import styled from 'styled-components/native'

export const Container = styled.View`
    margin: 20px
    padding: 10px
    border-radius: 16px
    background-color: ${Colors.white}
    align-self: center
    align-content: center
    justify-content: center
    ${Shadows.default}
`

export const Title = styled.Text`
    font-size: ${FontSizes.xl}px
    font-family: ${Fonts.medium}
    margin: 15px
    color: ${Colors.darkGray}
    text-align: center
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