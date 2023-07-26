import { Colors, Shadows } from '../../../styles'

import styled from 'styled-components/native'

export const Container = styled.ScrollView`
  flex: 1
  margin: 20px
  margin-bottom: 60px
  padding: 20px
  border-radius: 16px
  background-color: ${Colors.white}
  align-content: center
  overflow: scroll
  ${Shadows.default}
`