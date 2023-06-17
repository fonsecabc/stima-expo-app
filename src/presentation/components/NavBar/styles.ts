import { Colors, Fonts, Shadows } from '../../styles'

import styled from 'styled-components/native'

export const NavBarContainer = styled.View`
    margin-top: 10px
    background-color: ${Colors.white}
    height: ${Fonts.lg * 3}px
    padding: 10px
    padding-bottom: 15px
    padding-horizontal: 30px
    flex-direction: row
    align-items: center
    ${Shadows.default}
`
export const NavButton = styled.TouchableOpacity`
    flex: 1
    justify-content: center
    align-items: center
    color: ${({ isActive }: { isActive: boolean }) => (isActive ? Colors.lightBlue : Colors.darkGray)}
`

export const IconText = styled.Text`
    color: ${({ isActive }: { isActive: boolean }) => (isActive ? Colors.lightBlue : Colors.darkGray)}
    font-weight: 500
`