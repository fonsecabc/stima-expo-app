import { Colors, Fonts } from '../../styles'

import styled from 'styled-components/native'

export const Alerts = styled.Modal<{
    type: 'success' | 'error'
}>`
    position: absolute
    display: flex
    flex-direction: row
    justify-content: center
    align-content: center
    top: 0
    right: 0
    left: 0
    margin: 20px
    padding: 10px
    background-color: ${({ type }) => (type === 'success' ? Colors.lightGreen : Colors.lightRed )}
    border-radius: 16px
    border-width: 3px
    border-color: ${({ type }) => (type === 'success' ? Colors.green : Colors.red )}
`

export const Text = styled.Text`
    font-size: ${Fonts.lg}px
    font-weight: 500
    color: ${Colors.black}
    text-align: center
    align-content: center
    margin-left: 10px
`