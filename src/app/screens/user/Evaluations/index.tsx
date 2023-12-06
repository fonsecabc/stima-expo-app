import { formatDate } from '@helpers'
import { getEvaluationsList } from '@requests'
import { Containers, Texts, Colors } from '@styles'
import { EvaluationListObject, Filters, PaginationFilters } from '@entities'
import { PaginatedList, NavBar, HeaderTitle, Button, SearchBar, Screen } from '@components'

import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { PlusIcon, EyeIcon } from 'react-native-heroicons/outline'

type EvaluationScreenProps = { 
  navigation: any
  route: any
}

export const EvaluationsScreen = ({ navigation, route }: EvaluationScreenProps) => {
  const { accessToken, currentUser } = route.params

  const [evaluationList, setEvaluationList] = useState<EvaluationListObject[]>([])
  
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
    //   clientName: searchText.toLocaleLowerCase()
    // })
  }

  const createEvaluation = () => navigation.navigate('Create Evaluation')

  const loadItems = async (newPage: number) => {
    setLoading(true)
    setPaginationFilters(prev => ({ ...prev, currentPage: newPage }))

    const response = await getEvaluationsList({
      filters,
      accessToken: accessToken, 
      userUid: currentUser.uid,
      paginationFilters: { ...paginationFilters, currentPage: newPage },
    })

    if (response instanceof Error || !response.body) return setLoading(false)

    setLoading(false)
    setEvaluationList(response.body as EvaluationListObject[])
  }

  const loadMore = async () => await loadItems(paginationFilters.currentPage + 1)
  const loadPrevious = async () => {
    if (paginationFilters.currentPage > 1) {
      await loadItems(paginationFilters.currentPage - 1)
    }
  }

  return (
    <Screen background='gray'>
      <HeaderTitle navigation={navigation} title='Avaliações'/>
      <Button 
        action={createEvaluation} 
        text='ADICIONAR' 
        icon={<PlusIcon color={Colors.white}/>}
        type='default'
      />
      <SearchBar handleSearch={handleSearch} placeholder='Pesquise pelo nome do cliente'/>
      <PaginatedList
        list={evaluationList}
        nextPage={loadMore}
        previousPage={loadPrevious}
        isLoading={isLoading}
        setLoading={setLoading}
        currentPage={paginationFilters.currentPage}
        ItemComponent={({ item }: { item: EvaluationListObject }) => {
          const evaluationDate = formatDate(item.createdAt)

          return (
            <Containers.ListItem>
              <View>
                <Text style={Texts.md}>{item.clientName}</Text>
                <Text style={Texts.xs}>Data da avaliação: {evaluationDate}</Text>
              </View>
              <TouchableOpacity style={{ marginLeft: 'auto' }} onPress={() => navigation.navigate('Evaluation', { evaluationUid: item.uid })}>
                <EyeIcon color={Colors.darkGray}/>
              </TouchableOpacity>
            </Containers.ListItem>
          )
        }}
        EmptyComponent={() => (
          <Containers.ListItem>
            <Text style={Texts.md}>Nenhuma avaliação encontrada...</Text>
          </Containers.ListItem>
        )}
        LoadingComponent={() => (
          <Containers.ListItem>
            <Text style={Texts.md}>Carregando...</Text>
          </Containers.ListItem>
        )}
      />
      <NavBar navigation={navigation} activeScreen={1}/>
    </Screen>
  )
}