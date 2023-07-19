import React from 'react'
import { NavBar, HeaderTitle, Screen } from '../../../components'

export const ProfileScreen = (props: { navigation: any }) => {
  return (
    <Screen background='gray'>
      <HeaderTitle navigation={props.navigation} title='Perfil'/>
      <NavBar navigation={props.navigation} activeScreen={3}/>
    </Screen>
  )
}