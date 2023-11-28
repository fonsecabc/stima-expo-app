import { formatDate } from '@helpers'
import { getClientsList } from '@requests'
import { ClientListObject } from '@entities'
import { Containers, Texts, Colors } from '@styles'
import { NavBar, HeaderTitle, Button, SearchBar, Screen, List, Avatar } from '@components'

import React, { useEffect, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { PlusIcon, EyeIcon } from 'react-native-heroicons/outline'

type ClientScreenProps = { 
  navigation: any
  route: any
}

export const ClientsScreen = ({ navigation, route }: ClientScreenProps) => {
  const { accessToken, currentUser } = route.params

  const [clientsList, setClientsList] = useState<ClientListObject[]>([])
  const [originalClientsList, setOriginalClientsList] = useState<ClientListObject[]>([])

  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () =>  {
      setIsLoading(true)
      const list = await getList()
      setClientsList(list)
      setOriginalClientsList(list)
      setIsLoading(false)
    }
    fetchData()
  }, [])

  const getList = async () => {
    const response = await getClientsList({
      accessToken: accessToken, 
      userUid: currentUser?.uid ?? ''
    })

    return response instanceof Error ? [] : response.body || []
  }
    
  const handleSearch = (searchText: string) => {
    if (!searchText || !originalClientsList) {
      setClientsList(originalClientsList)
    } else {
      const filteredList = originalClientsList.filter((client) =>
        client.name.toLowerCase().includes(searchText.toLowerCase())
      )
      setClientsList(filteredList)
    }
  }
    
  const createClient = () => navigation.navigate('Create Client')

  console.log(clientsList)

  return (
    <Screen background='gray'>
      <HeaderTitle navigation={navigation} title='Clientes'/>
      <Button 
        action={createClient} 
        icon={<PlusIcon color={Colors.white}/>} 
        text='ADICIONAR'
        type='default'
      />
      <SearchBar handleSearch={handleSearch} placeholder='Pesquise pelo nome'/>
      <List
        list={clientsList}
        emptyListMessage={isLoading ? 'Carregando...' : 'Nenhum cliente cadastrado'}
        ItemComponent={({ item }: {item: ClientListObject}) => {
          let lastEvaluatedAt = 'Cliente a ser avaliado'

          if (item.lastEvaluatedAt) {
            const lastEvaluatedAtDate = formatDate(item.lastEvaluatedAt)
            lastEvaluatedAt = `Data da ultima avaliação: ${lastEvaluatedAtDate}`
          }

          return (
            <Containers.ListItem>
              <Avatar letter={item.name.charAt(0)}/>
              <View style={{ marginLeft: 10 }}>
                <Text style={Texts.md}>{item.name}</Text>
                <Text style={Texts.xs}>{lastEvaluatedAt}</Text>
              </View>
              <TouchableOpacity style={{ marginLeft:'auto' }} onPress={() => navigation.navigate('Client', { clientUid: item.uid })}>
                <EyeIcon color={Colors.darkGray}/>
              </TouchableOpacity>
            </Containers.ListItem>
          )}
        }
      />
      <NavBar navigation={navigation} activeScreen={2}/>
    </Screen>
  )
}
