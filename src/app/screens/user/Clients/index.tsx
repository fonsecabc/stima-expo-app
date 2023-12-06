import { formatDate } from '@helpers'
import { getClientsList } from '@requests'
import { Containers, Texts, Colors } from '@styles'
import { ClientListObject, Filters, PaginationFilters } from '@entities'
import { NavBar, HeaderTitle, Button, SearchBar, Screen, PaginatedList, Avatar } from '@components'

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

  const [filters, setFilters] = useState<Filters>()
  const [isLoading, setLoading] = useState(false)
  const [paginationFilters, setPaginationFilters] = useState<PaginationFilters>({
    pageSize: 6,
    currentPage: 1
  })

  useEffect(() => {
    loadItems(1)
  }, [])

  const handleSearch = (searchText: string) => {
    // if (!searchText) return setFilters(undefined)
    
    // return setFilters({
    //   name: searchText.toLocaleLowerCase()
    // })
  }
    
  const createClient = () => navigation.navigate('Create Client')

  const loadItems = async (newPage: number) => {
    setLoading(true)
    setPaginationFilters(prev => ({ ...prev, currentPage: newPage }))

    const response = await getClientsList({
      filters,
      accessToken: accessToken, 
      userUid: currentUser.uid,
      paginationFilters: { ...paginationFilters, currentPage: newPage },
    })

    if (response instanceof Error || !response.body) return setLoading(false)

    setLoading(false)
    setClientsList(response.body as ClientListObject[])
  }

  const loadMore = async () => await loadItems(paginationFilters.currentPage + 1)
  const loadPrevious = async () => {
    if (paginationFilters.currentPage > 1) {
      await loadItems(paginationFilters.currentPage - 1)
    }
  }

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
      <PaginatedList
        list={clientsList}
        nextPage={loadMore}
        previousPage={loadPrevious}
        isLoading={isLoading}
        setLoading={setLoading}
        currentPage={paginationFilters.currentPage}
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
        EmptyComponent={() => (
          <Containers.ListItem>
            <Text style={Texts.md}>Nenhum cliente encontrado...</Text>
          </Containers.ListItem>
        )}
        LoadingComponent={() => (
          <Containers.ListItem>
            <Text style={Texts.md}>Carregando...</Text>
          </Containers.ListItem>
        )}
      />
      <NavBar navigation={navigation} activeScreen={2}/>
    </Screen>
  )
}
