import { Colors, FontSizes, Fonts } from '@styles'

import Modal from 'react-native-modal'
import styled from 'styled-components/native'

export const CenteredModal = styled(Modal)`
  justify-content: center
`

export const Container = styled.View`
  background-color: ${Colors.white}
  border-radius: 20px
  padding: 20px
`

export const Title = styled.Text`
  font-size: ${FontSizes.xl2}px
  font-family: ${Fonts.medium}
  margin: 10px
  color: ${Colors.darkGray}
  text-align: center
`

export const Description = styled.Text`
  font-size: ${FontSizes.lg}px
  font-family: ${Fonts.regular}
  margin: 10px
  color: ${Colors.darkGray}
  text-align: center
`
