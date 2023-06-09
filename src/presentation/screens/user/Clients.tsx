import React from 'react'
import { PlusIcon } from 'react-native-heroicons/outline'
import { NavBar, HeaderTitle, Button, SearchBar, Screen } from '../../components'

export const ClientsScreen = (props: { navigation: any }) => {
    const CreateClient = () => {
        props.navigation.navigate('Criar Cliente')
    }

    return (
        <Screen background='gray'>
            <HeaderTitle navigation={props.navigation} title='Clientes'/>
            <Button action={CreateClient} text='ADICIONAR' icon={PlusIcon} isDisabled={false}/>
            <SearchBar list={[]} placeholder='Pesquise pelo nome'/>
            <NavBar navigation={props.navigation} activeScreen={2}/>
        </Screen>
    )
}