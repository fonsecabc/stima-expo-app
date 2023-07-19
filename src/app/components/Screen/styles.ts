import { Colors } from '../../styles'

import styled from 'styled-components/native'

export const ScreenContainer = styled.View`
  flex: 1
  background-color: ${({ background }: {background: 'gray' | 'blue'}) => (
    background === 'gray' ? Colors.lightGray : Colors.lightBlue
  )}
`
