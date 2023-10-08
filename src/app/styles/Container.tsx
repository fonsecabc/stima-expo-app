import { Colors, FontSizes, Shadows, width } from '@styles'

import { Platform } from 'react-native'
import styled from 'styled-components/native'

export const Containers = {
  ListItem: styled.View`
    margin-bottom: 10px
    padding-horizontal: 20px
    height: ${FontSizes.md * 3}px
    flex-direction: row
    align-items: center
    justify-content: space-between
    border-radius: 16px
    background-color: ${Colors.white}
  `,
  CenteredDefault: styled.View`
    margin: 20px
    margin-bottom: 60px
    padding: 30px
    border-radius: 16px
    background-color: ${Colors.white}
    align-content: center
    max-width: ${width}px
    ${Platform.OS === 'web' && 'align-self: center'}
    ${Shadows.default}
  `

}