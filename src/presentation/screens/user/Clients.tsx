/* eslint-disable react-hooks/exhaustive-deps */
import { GetType } from '../../../domain/enums'
import { AlertContext } from '../../contexts'
import { ClientListObject } from '../../../domain/entities'
import { Containers, Fonts, Texts, Colors } from '../../styles'
import { GetEntityService } from '../../../application/services'
import { NavBar, HeaderTitle, Button, SearchBar, Screen } from '../../components'

import React, { useContext, useEffect, useState } from 'react'
import { PlusIcon, EyeIcon } from 'react-native-heroicons/outline'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'

export const ClientsScreen = (props: { navigation: any }) => {
    const [clientsList, setClientsList] = useState<ClientListObject[]>([])
    const [originalClientsList, setOriginalClientsList] = useState<ClientListObject[]>([])
    
    const { pushNewAlert } = useContext(AlertContext)
    
    useEffect(() => {
        async function fetchData() {
            const list = await getClientList()
            setClientsList(list)
            setOriginalClientsList(list)
        }
        fetchData()
    }, [])
    
    async function getClientList() {
        const response = await GetEntityService<ClientListObject[]>({ entity: 'client', type: GetType.LIST, })
        if (response instanceof Error) {
            pushNewAlert(response.message, 'error')
            return []
        } 

        return response
    }
    
    function handleSearch(searchText: string) {
        if (!searchText) {
            setClientsList(originalClientsList)
        } else {
            const filteredList = originalClientsList.filter((client) =>
                client.name.toLowerCase().includes(searchText.toLowerCase())
            )
            setClientsList(filteredList)
        }
    }
    
    function CreateClient() {
        props.navigation.navigate('Criar Cliente')
    }

    return (
        <Screen background='gray'>
            <HeaderTitle navigation={props.navigation} title='Clientes'/>
            <Button action={CreateClient} text='NOVO CLIENTE' icon={PlusIcon} isDisabled={false}/>
            <SearchBar handleSearch={handleSearch} placeholder='Pesquise pelo nome'/>
            <FlatList 
                showsHorizontalScrollIndicator={false}
                style={{ flex: 1 , marginHorizontal: 20, paddingTop: 10 }}
                data={clientsList}
                extraData={clientsList}
                renderItem={({ item }) => 
                    <View style={[Containers.list_item,]}>
                        <View style={{ marginHorizontal: 20 }}>
                            <Text style={Texts.md}>{item.name}</Text>
                            <Text style={Texts.xs}>Data da ultima avaliação: {item.lastEvaluatedAt?.getDay()}/{item.lastEvaluatedAt?.getMonth()}/{item.lastEvaluatedAt?.getFullYear()}</Text>
                        </View>
                        <TouchableOpacity style={{ marginLeft:'auto' }} onPress={() => console.log(item.uid)}>
                            <EyeIcon color={Colors.darkGray} size={Fonts.xl}/>
                        </TouchableOpacity>
                    </View>
                }
                keyExtractor={(item) => item.uid}
                ListEmptyComponent={
                    <View style={Containers.list_item}>
                        <Text style={[Texts.md, { textAlign: 'center' }]}>Nenhum cliente encontrado</Text>
                    </View>
                }
            />
            <NavBar navigation={props.navigation} activeScreen={2}/>
        </Screen>
    )
}