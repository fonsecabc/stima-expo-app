import styled from 'styled-components/native'
import { Colors, Fonts, Shadows } from '../../../styles'

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

export const TextSmall = styled.Text`
    padding-horizontal: 5px
    font-size: ${Fonts.xs}px
    font-weight: 500
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

