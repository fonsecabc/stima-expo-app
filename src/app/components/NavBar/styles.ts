import { Colors, Shadows, Fonts } from '../../styles'

import styled from 'styled-components/native'

export const NavBarContainer = styled.View`
    position: fixed
    bottom: 0
    right: 0
    left: 0
    background-color: ${Colors.white}
    padding: 10px 
    padding-bottom: 30px 
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
    font-family: ${Fonts.medium}
`