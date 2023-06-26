import { NavBarContainer, NavButton, IconText } from './styles'

import React from 'react'
import * as solid from 'react-native-heroicons/solid'
import { ClipboardDocumentListIcon, UserGroupIcon, UserCircleIcon } from 'react-native-heroicons/outline'

interface NavBarProps {
  navigation: any
  activeScreen: 1 | 2 | 3
}

export const NavBar = ({ navigation, activeScreen }: NavBarProps) => {
    return (
        <NavBarContainer>
            <NavButton isActive={activeScreen === 1} onPress={() => navigation.navigate('Evaluations')}>
                {activeScreen === 1 ? <solid.ClipboardDocumentListIcon size={30} /> : <ClipboardDocumentListIcon size={30} />}
                <IconText isActive={activeScreen === 1}>Avaliações</IconText>
            </NavButton>
            <NavButton isActive={activeScreen === 2} onPress={() => navigation.navigate('Clients')}>
                {activeScreen === 2 ? <solid.UserGroupIcon size={30} /> : <UserGroupIcon size={30} />}
                <IconText isActive={activeScreen === 2}>Clientes</IconText>
            </NavButton>
            <NavButton isActive={activeScreen === 3} onPress={() => navigation.navigate('Profile')}>
                {activeScreen === 3 ? <solid.UserCircleIcon size={30} /> : <UserCircleIcon size={30} />}
                <IconText isActive={activeScreen === 3}>Perfil</IconText>
            </NavButton>
        </NavBarContainer>
    )
}
