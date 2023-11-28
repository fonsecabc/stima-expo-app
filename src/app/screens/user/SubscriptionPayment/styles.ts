import { Colors, FontSizes, Fonts, Shadows } from '@styles'

import styled from 'styled-components/native'

export const Container = styled.ScrollView`
  flex: 1
  margin: 20px
  margin-bottom: 60px
  padding: 20px
  border-radius: 16px
  background-color: ${Colors.white}
  ${Shadows.default}
`

export const Title = styled.Text`
  font-size: ${FontSizes.xl2}px
  font-family: ${Fonts.semiBold}
  color: ${Colors.darkGray}
  text-align: center
`


export const Description = styled.Text`
  font-size: ${FontSizes.md}px
  font-family: ${Fonts.regular}
  color: ${Colors.darkGray}
  text-align: center
  margin-bottom: 20px
  margin-top: 10px
`

export const SubscriptionContainer = styled.TouchableOpacity<{
  isFocused: boolean
}>`
  padding: 20px
  margin-vertical: 10px
  flex-direction: row
  justify-content: between
  background-color: ${({ isFocused }) => isFocused ? Colors.green : Colors.white}
  border-color: ${({ isFocused }) => isFocused ? Colors.green : Colors.gray} 
  border-width: 2px
  border-radius: 16px
`

export const IconContainer = styled.View`
  justify-content: center
`

export const TextContainer = styled.View`
  flex: 1
`

export const SubscriptionTitle = styled.Text<{
  isFocused: boolean
}>`
  font-size: ${FontSizes.lg}px
  font-family: ${Fonts.semiBold}
  color: ${({ isFocused }) => isFocused ? Colors.white : Colors.darkGray}
  text-align: left
`

export const SubscriptionDescription = styled.Text<{
  isFocused: boolean
}>`
  font-size: ${FontSizes.md}px
  font-family: ${Fonts.regular}
  color: ${({ isFocused }) => isFocused ? Colors.white : Colors.darkGray}
  text-align: left
`