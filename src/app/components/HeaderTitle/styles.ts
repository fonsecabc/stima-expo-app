import { Colors, Shadows, FontSizes, Fonts } from '../../styles'

import styled from 'styled-components/native'
import { BellIcon, ChevronLeftIcon } from 'react-native-heroicons/outline'

export const HeaderTitleContainer = styled.View`
  margin-top: 60px
  margin-bottom: 20px
  margin-horizontal: 20px
  padding-horizontal: 20px
  height: ${FontSizes.md * 3}px
  flex-direction: row
  align-items: center
  border-radius: 16px
  background-color: ${Colors.white}
  ${Shadows.default}
`

export const HeaderTitleText = styled.Text`
  color: ${Colors.darkGray}
  font-family: ${Fonts.medium}
  font-size: ${FontSizes.xl}px
  margin-right: auto
`

export const NotificationIcon = styled(BellIcon)`
  margin-left: auto
  color: ${Colors.darkGray}
`

export const GoBackIcon = styled(ChevronLeftIcon)`
  color: ${Colors.darkGray}
  margin-right: 10px
`
