import { useAuth } from '@contexts'
import { Colors, Containers, FontSizes, Texts } from '@styles'
import { NavBar, HeaderTitle, Screen } from '@components'

import React from 'react'
import * as icons from 'react-native-heroicons/outline'
import { FlatList, Linking, Text, TouchableOpacity } from 'react-native'

type OptionsScreenProps = {
  navigation: any
  route: any
}

export const OptionsScreen = ({ navigation }: OptionsScreenProps) => {
  const { logout } = useAuth()

  const settingsList = [
    // {
    //   name: 'Plano de assinatura',
    //   onPress: () => navigation.navigate('Subscription Payment'),
    //   icon: <icons.CreditCardIcon color={Colors.darkGray} size={FontSizes.lg}/>
    // },
    {
      name: 'Ajuda',
      onPress: () => Linking.openURL('https://wa.me//5531983904021?text=Preciso%20de%20ajuda%20com%20o%20Stima!'),
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
      <HeaderTitle navigation={navigation} title='Opções'/>
      <FlatList
        showsHorizontalScrollIndicator={false}
        style={{ flex: 1 , marginHorizontal: 20, paddingTop: 10 }}
        data={settingsList}
        extraData={settingsList}
        renderItem={({ item }) => 
          <TouchableOpacity onPress={item.onPress}>
            <Containers.ListItem>
              <Text style={Texts.md}>{item.name}</Text>
              {item.icon}
            </Containers.ListItem>
          </TouchableOpacity>
        }
        keyExtractor={(item: any) => item.name}
      />
      <NavBar navigation={navigation} activeScreen={3}/>
    </Screen>
  )
}