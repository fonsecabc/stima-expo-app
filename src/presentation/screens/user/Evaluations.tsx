import React from 'react'
import { PlusIcon } from 'react-native-heroicons/outline'
import { NavBar, HeaderTitle, Button, SearchBar, Screen } from '../../components'

export const EvaluationsScreen = (props: { navigation: any }) => {
    const CreateEvaluation = () => {
        props.navigation.navigate('Criar Avaliação')
    }

    return (
        <Screen background='gray'>
            <HeaderTitle navigation={props.navigation} title='Avaliações'/>
            <Button action={CreateEvaluation} text='ADICIONAR' icon={PlusIcon} isDisabled={false}/>
            <SearchBar list={[]} placeholder='Pesquise pelo nome'/>
            <NavBar navigation={props.navigation} activeScreen={1}/>
        </Screen>
    )
}