import styled from 'styled-components/native'
import { Colors, FontSizes, Shadows, Fonts } from '../../../styles'

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
    margin-horizontal: 5px
    ${({ isLink }: { isLink: boolean }) => (!isLink ? '' : `
        color: ${Colors.lightBlue}
        font-family: ${Fonts.medium}
    `)}
`

export const TextSmall = styled.Text`
    padding-horizontal: 5px
    font-size: ${FontSizes.xs}px
    font-family: ${Fonts.medium}
    color: ${Colors.darkGray}
    text-align: left
    margin-horizontal: 20px
`

export const PasswordValidatorContainer = styled.View`
    flex-direction: row
    margin: 20px
    margin-vertical: 5px
    justify-content: space-between
    padding-horizontal: 5px
`

