import { Colors } from '@styles'
import { NavBarContainer, NavButton, IconText } from '@components/NavBar/styles'

import React from 'react'
import * as solid from 'react-native-heroicons/solid'
import { ClipboardDocumentListIcon, UserGroupIcon, Cog6ToothIcon } from 'react-native-heroicons/outline'

interface NavBarProps {
  navigation: any
  activeScreen: 1 | 2 | 3
}

export const NavBar = ({ navigation, activeScreen }: NavBarProps) => {
  return (
    <NavBarContainer>
      <NavButton isActive={activeScreen === 1} onPress={() => navigation.navigate('Evaluations')}>
        {activeScreen === 1 ? <solid.ClipboardDocumentListIcon size={30} color={Colors.lightBlue}/> : <ClipboardDocumentListIcon size={30} color={Colors.darkGray} />}
        <IconText isActive={activeScreen === 1}>Avaliações</IconText>
      </NavButton>
      <NavButton isActive={activeScreen === 2} onPress={() => navigation.navigate('Clients')}>
        {activeScreen === 2 ? <solid.UserGroupIcon size={30} color={Colors.lightBlue}/> : <UserGroupIcon size={30} color={Colors.darkGray} />}
        <IconText isActive={activeScreen === 2}>Clientes</IconText>
      </NavButton>
      <NavButton isActive={activeScreen === 3} onPress={() => navigation.navigate('Options')}>
        {activeScreen === 3 ? <solid.Cog6ToothIcon size={30} color={Colors.lightBlue}/> : <Cog6ToothIcon size={30} color={Colors.darkGray} />}
        <IconText isActive={activeScreen === 3}>Opções</IconText>
      </NavButton>
    </NavBarContainer>
  )
}
