import { Colors, FontSizes, Fonts, Shadows } from '@styles'

import styled from 'styled-components/native'

export const Title = styled.Text`
  font-size: ${FontSizes.xl}px
  font-family: ${Fonts.semiBold}
  color: ${Colors.darkGray}
  text-align: left
  padding-horizontal: 5px
  margin-top: 20px
  margin-horizontal: 20px
`

export const Question = styled.View`
  margin-top: 20px
  margin-bottom: 0px
  padding-horizontal: 20px
`

export const Label = styled.Text`
  font-size: ${FontSizes.lg}px
  font-family: ${Fonts.medium}
  color: ${Colors.darkGray}
  text-align: left
  padding-horizontal: 5px
  margin-top: 20px
`

export const Description = styled.Text`
  font-size: ${FontSizes.xs}px
  font-family: ${Fonts.light}
  color: ${Colors.darkGray}
  padding-horizontal: 5px

  text-align: left
`

export const AnswerContainer = styled.View`
  margin-top: 5px
  margin-bottom: 0px
  height: ${FontSizes.xl * 2}px
  flex-direction: row
  align-items: center
  border-radius: 16px
  padding-horizontal: 20px
  background-color: ${Colors.lightGray}
`

export const Answer = styled.Text`
  font-size: ${FontSizes.md}px
  font-family: ${Fonts.medium}
  color: ${Colors.darkGray}
  text-align: left
  width: 100%
`

export const Container = styled.View`
  margin: 20px
  margin-top: 10px
  margin-bottom: 60px
  padding-bottom: 20px
  border-radius: 16px
  background-color: ${Colors.white}
  align-content: center
  ${Shadows.default}
`


