import { Colors } from '../../styles'

import styled from 'styled-components/native'

export const ScreenContainer = styled.View`
    position: absolute
    left: 0
    right: 0
    top: 0
    bottom: 0
    background-color: ${({ background }: {background: 'gray' | 'blue'}) => (
        background === 'gray' ? Colors.lightGray : Colors.lightBlue
    )}
`
