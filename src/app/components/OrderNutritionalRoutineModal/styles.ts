import { Colors, FontSizes, Fonts } from '@styles'

import Modal from 'react-native-modal'
import styled from 'styled-components/native'

export const BottomModal = styled(Modal)`
  justify-content: flex-end
  margin: 0
`

export const Container = styled.View`
  background-color: ${Colors.white}
  border-top-left-radius: 10px
  border-top-right-radius: 10px
  padding: 30px
  padding-bottom: 20px
`

export const Title = styled.Text`
  font-size: ${FontSizes.xl2}px
  font-family: ${Fonts.medium}
  margin-bottom: 30px
  color: ${Colors.darkGray}
  text-align: center
`

export const TextContainer = styled.View`
  flex-direction: row
  justify-content: space-between
  border-bottom-width: 1px
  border-bottom-color: ${Colors.darkGray}
  padding-bottom: 10px
  margin-bottom: 10px
`

export const Description = styled.Text`
  font-size: ${FontSizes.lg}px
  font-family: ${Fonts.regular}
  color: ${Colors.darkGray}
`

export const Price = styled.Text`
  font-size: ${FontSizes.lg}px
  font-family: ${Fonts.bold}
  color: ${Colors.darkGray}
`