import { Colors, Shadows, Fonts } from '../../styles'

import styled from 'styled-components/native'
import { BellIcon } from 'react-native-heroicons/outline'

export const HeaderTitleContainer = styled.View`
  margin-bottom: 60px
  margin: 20px
  padding: 20px
  height: ${Fonts.md * 3}px
  flex-direction: row
  align-items: center
  border-radius: 16px
  background-color: ${Colors.white}
  ${Shadows.default}
`

export const HeaderTitleText = styled.Text`
  color: ${Colors.darkGray}
  font-weight: 500
  font-size: ${Fonts.md}px
  margin-right: auto
`

export const NotificationIcon = styled(BellIcon)`
  margin-left: auto
  color: ${Colors.darkGray}
`
