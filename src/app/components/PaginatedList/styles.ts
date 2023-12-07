import { Colors, FontSizes, Fonts, Shadows } from '@styles'

import styled from 'styled-components/native'

export const Label = styled.Text`
  font-size: ${FontSizes.xl}px
  font-family: ${Fonts.semiBold}
  color: ${Colors.darkGray}
  text-align: left
  padding-horizontal: 5px
  margin-top: 20px
  margin-horizontal: 20px
`

export const Title = styled.Text`
  font-size: ${FontSizes.md}px
  font-family: ${Fonts.medium}
  color: ${Colors.darkGray}
  text-align: left
`

export const Container = styled.View`
  flex: 1
  margin-top: 10px
  padding-horizontal: 20px
`

export const PaginationContainer = styled.View`
  flex-direction: row
  justify-content: space-between
  align-items: center
  margin-top: 20px
  margin-bottom: 20px
`

export const ListContainer = styled.ScrollView`

`

export const IconContainer = styled.TouchableOpacity<{
  disabled?: boolean
}>`
  padding: 10px
  padding-right: 20px
  padding-left: 20px
  justify-content: center
  height: ${FontSizes.md * 3}px
  border-radius: 16px
  align-self: center
  color: ${Colors.white}
  background-color: ${(props) => props.disabled ? Colors.gray : Colors.green}
  ${Shadows.default}
`