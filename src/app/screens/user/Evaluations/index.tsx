import { getEvaluationsList } from '@requests'
import { EvaluationListObject } from '@entities'
import { Containers, Texts, Colors } from '@styles'
import { List, NavBar, HeaderTitle, Button, SearchBar, Screen } from '@components'

import React, { useState } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { PlusIcon, EyeIcon } from 'react-native-heroicons/outline'
import { useFocusEffect } from '@react-navigation/native'
import { formatDate } from '@helpers'

type EvaluationScreenProps = { 
  navigation: any
  route: any
}

export const EvaluationsScreen = ({ navigation, route }: EvaluationScreenProps ) => {
  const { accessToken, currentUser } = route.params

  const [evaluationList, setEvaluationList] = useState<EvaluationListObject[]>([])
  const [originalEvaluationList, setOriginalEvaluationList] = useState<EvaluationListObject[]>([])

  const [isLoading, setIsLoading] = useState(false)


  useFocusEffect(
    React.useCallback(() => {
      const fetchData = async () =>  {
        setIsLoading(true)
        const list = await getList()
        setEvaluationList(list)
        setOriginalEvaluationList(list)
        setIsLoading(false) 
      }
      fetchData()
    }, [])
  )

  const getList = async () => {
    const response = await getEvaluationsList({
      accessToken: accessToken, 
      userUid: currentUser.uid
    })

    return response instanceof Error ? [] : response.body || []
  }

  const handleSearch = (searchText: string) => {
    if (!searchText) {
      setEvaluationList(originalEvaluationList)
    } else {
      const filteredList = originalEvaluationList.filter((evaluation) =>
        evaluation.clientName.toLowerCase().includes(searchText.toLowerCase())
      )
      setEvaluationList(filteredList)
    }
  }

  const createEvaluation = () => {
    navigation.navigate('Create Evaluation')
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
      <List
        list={evaluationList}
        emptyListMessage={isLoading ? 'Carregando...' : 'Nenhuma avaliação encontrada'}
        ItemComponent={({ item }: {item: EvaluationListObject}) => {
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
      />
      <NavBar navigation={navigation} activeScreen={1}/>
    </Screen>
  )
}