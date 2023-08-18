import { useAuth } from '../../../contexts'
import { Containers, Texts, Colors } from '../../../styles'
import { EvaluationListObject } from '../../../../types/entities'
import { getEvaluationsList } from '../../../../modules/_requests'
import { List, NavBar, HeaderTitle, Button, SearchBar, Screen } from '../../../components'

import React, { useEffect, useState } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { PlusIcon, EyeIcon } from 'react-native-heroicons/outline'

type EvaluationScreenProps = { 
    navigation: any
}

export const EvaluationsScreen = ({ navigation }: EvaluationScreenProps ) => {
  const { accessToken, currentUser } = useAuth()

  const [evaluationList, setEvaluationList] = useState<EvaluationListObject[]>([])
  const [originalEvaluationList, setOriginalEvaluationList] = useState<EvaluationListObject[]>([])

  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () =>  {
      setIsLoading(true)
      const list = await getList()
      setEvaluationList(list)
      setOriginalEvaluationList(list)
      setIsLoading(false) 
    }
    fetchData()
  }, [])
    
  const getList = async () => {
    const response = await getEvaluationsList({
      accessToken: await accessToken(), 
      userUid: currentUser?.uid ?? ''
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
          const createdAt = new Date(item.createdAt)
          return (
            <View style={[Containers.listItem,]}>
              <View>
                <Text style={Texts.md}>{item.clientName}</Text>
                <Text style={Texts.xs}>Data da avaliação: {createdAt.getDate()}/{createdAt.getMonth()}/{createdAt.getFullYear()}</Text>
              </View>
              <TouchableOpacity style={{ marginLeft: 'auto' }} onPress={() => navigation.navigate('Evaluation', { evaluationUid: item.uid })}>
                <EyeIcon color={Colors.darkGray}/>
              </TouchableOpacity>
            </View>
          )
        }}
      />
                
      <NavBar navigation={navigation} activeScreen={1}/>
    </Screen>
  )
}