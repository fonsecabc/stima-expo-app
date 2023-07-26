import { useAuth } from '../../../contexts'
import { Colors, Containers, FontSizes, Texts } from '../../../styles'
import { NavBar, HeaderTitle, Screen } from '../../../components'

import React from 'react'
import * as icons from 'react-native-heroicons/outline'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'

type ProfileScreenProps = {
  navigation: any
}

export const ProfileScreen = ({ navigation }: ProfileScreenProps) => {
  const { logout } = useAuth()

  const settingsList = [
    {
      name: 'Minhas informações',
      onPress: () => navigation.navigate('My Information'),
      icon: <icons.IdentificationIcon color={Colors.darkGray} size={FontSizes.lg}/> 
    },
    {
      name: 'Ajuda',
      onPress: () => navigation.navigate('Help'),
      icon: <icons.InformationCircleIcon color={Colors.darkGray} size={FontSizes.lg}/> 
    },
    {
      name: 'Sair',
      onPress: logout,
      icon: <icons.ArrowLeftOnRectangleIcon color={Colors.darkGray} size={FontSizes.lg}/> 
    },
  ]

  return (
    <Screen background='gray'>
      <HeaderTitle navigation={navigation} title='Perfil'/>
      <FlatList
        showsHorizontalScrollIndicator={false}
        style={{ flex: 1 , marginHorizontal: 20, paddingTop: 10 }}
        data={settingsList}
        extraData={settingsList}
        renderItem={({item}) => 
          <TouchableOpacity 
            style={[Containers.listItem, { justifyContent: 'space-between' }]} 
            onPress={() => item.onPress()}
          >
            <Text style={Texts.md}>{item.name}</Text>
            {item.icon}
          </TouchableOpacity>
        }
        keyExtractor={(item: any) => item.name}
      />
      <NavBar navigation={navigation} activeScreen={3}/>
    </Screen>
  )
}