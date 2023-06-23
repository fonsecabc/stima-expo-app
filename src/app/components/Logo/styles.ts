import styled from 'styled-components/native'
import { RFPercentage } from 'react-native-responsive-fontsize'

const height = RFPercentage(10) >= 80 ? 80 : RFPercentage(10)

export const LogoContainer = styled.View`
  margin: 30px
  margin-bottom: 10px
  align-self: center
`

export const LogoImage = styled.Image`
  width: ${height * 3}px
  height: ${height}px
`