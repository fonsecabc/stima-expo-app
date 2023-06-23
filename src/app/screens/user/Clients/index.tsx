import { useAlerts } from '../../../contexts/AlertProvider'
import { ClientListObject } from '../../../../types/entities'
import { Containers, Fonts, Texts, Colors } from '../../../styles'
import { NavBar, HeaderTitle, Button, SearchBar, Screen } from '../../../components'

import React, { useEffect, useState } from 'react'
import { PlusIcon, EyeIcon } from 'react-native-heroicons/outline'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'

type ClientScreenProps = { 
    navigation: any
}

export const ClientsScreen = ({ navigation }: ClientScreenProps) => {
    const [clientsList, setClientsList] = useState<ClientListObject[]>([])
    const [originalClientsList, setOriginalClientsList] = useState<ClientListObject[]>([])
    
    const { pushNewAlert } = useAlerts()
    
    useEffect(() => {
        const fetchData = async () =>  {
            //const list = getClientList()
            //setClientsList(list)
            //setOriginalClientsList(list)
        }
        fetchData()
    }, [])
    
    const getClientList = () => {
        //const response = await GetEntityService<ClientListObject[]>({ entity: 'client', type: GetType.LIST, })
        //if (response instanceof Error) {
        //    pushNewAlert({ message: response.message, type: 'error'})
        //    return []
        //} 

        //return response
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
    
    const createClient = () => {
        navigation.navigate('Criar Cliente')
    }

    return (
        <Screen background='gray'>
            <HeaderTitle navigation={navigation} title='Clientes'/>
            <Button action={createClient} icon={<PlusIcon/>} text='NOVO CLIENTE'/>
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
            <NavBar navigation={navigation} activeScreen={2}/>
        </Screen>
    )
}