import { useAuth } from '../../../contexts'
import { Containers, Texts } from '../../../styles'
import { EvaluationListObject } from '../../../../types/entities'
import { getEvaluationsList } from '../../../../modules/requests'
import { NavBar, HeaderTitle, Button, SearchBar, Screen } from '../../../components'

import Toast from 'react-native-toast-message'
import React, { useEffect, useState } from 'react'
import { PlusIcon, EyeIcon } from 'react-native-heroicons/outline'
import { FlatList, Text, View, TouchableOpacity } from 'react-native'

type EvaluationScreenProps = { 
    navigation: any
}

export const EvaluationsScreen = ({ navigation }: EvaluationScreenProps ) => {
    const { accessToken, currentUser } = useAuth()

    const [evaluationList, setEvaluationList] = useState<EvaluationListObject[]>([])
    const [originalEvaluationList, setOriginalEvaluationList] = useState<EvaluationListObject[]>([])

    useEffect(() => {
        const fetchData = async () =>  {
            const list = await getList()
            setEvaluationList(list)
            setOriginalEvaluationList(list)
        }
        fetchData()
    }, [])
    
    const getList = async () => {
        const response = await getEvaluationsList(await accessToken(), currentUser?.uid ?? '')
        if (response instanceof Error) {
            Toast.show({ type: 'error', text1: response.message })
            return []
        }

        return response.data
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

    const CreateEvaluation = () => {
        navigation.navigate('Create Evaluation')
    }

    return (
        <Screen background='gray'>
            <HeaderTitle navigation={navigation} title='Avaliações'/>
            <Button action={CreateEvaluation} text='ADICIONAR' icon={<PlusIcon/>}/>
            <SearchBar handleSearch={handleSearch} placeholder='Pesquise pelo nome'/>
            <FlatList 
                showsHorizontalScrollIndicator={false}
                style={{ flex: 1 , marginHorizontal: 20, paddingTop: 10 }}
                data={evaluationList}
                extraData={evaluationList}
                renderItem={({ item }) => 
                    <View style={[Containers.list_item,]}>
                        <View>
                            <Text style={Texts.md}>{item.clientName}</Text>
                            <Text style={Texts.xs}>Data da avaliação: {item.createdAt?.getDay()}/{item.createdAt?.getMonth()}/{item.createdAt?.getFullYear()}</Text>
                        </View>
                        <TouchableOpacity onPress={() => console.log(item.uid)}>
                            <EyeIcon size={30}/>
                        </TouchableOpacity>
                    </View>
                }
                keyExtractor={(item) => item.uid}
                ListEmptyComponent={
                    <View style={Containers.list_item}>
                        <Text style={[Texts.md]}>Nenhuma avaliação encontrada</Text>
                    </View>
                }
            />
            <NavBar navigation={navigation} activeScreen={1}/>
        </Screen>
    )
}