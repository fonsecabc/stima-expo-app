import { Colors, FontSizes, Fonts } from '@styles'

import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity`
  margin-vertical: 20px
  height: ${FontSizes.xl * 2}px
  flex-direction: row
  border-radius: 16px
  background-color: ${Colors.lightGray}
  align-items: center
`

export const Text = styled.Text`
  flex: 1
  padding-horizontal: 20px
  font-size: ${FontSizes.md}px
  font-family: ${Fonts.semiBold}
  color: ${Colors.darkGray}
`

export const Icon = styled.View`
  height: 100%
  justify-content: center
  padding: 10px
  background-color: ${Colors.green}
  border-top-right-radius: 16px
  border-bottom-right-radius: 16px
`

export const Label = styled.Text`
  font-size: ${FontSizes.lg}px
  font-family: ${Fonts.medium}
  color: ${Colors.darkGray}
  text-align: left
  margin-top: 20px
`

export const DescriptionText = styled.Text`
    font-size: ${FontSizes.xs}px
    font-family: ${Fonts.light}
    color: ${Colors.darkGray}
    text-align: left
`
