import { Platform } from 'react-native'
import styled from 'styled-components/native'
import { RFPercentage } from 'react-native-responsive-fontsize'

const height = RFPercentage(10) >= 60 ? 60 : RFPercentage(10)

export const LogoContainer = styled.View`
  margin-top: ${Platform.OS === 'web' ? '20' : '60'}px
  margin-bottom: 10px
  align-self: center
`

export const LogoImage = styled.Image`
  width: ${height * 3}px
  height: ${height}px
`