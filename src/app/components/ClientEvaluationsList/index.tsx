import { List } from '../List'
import { Label, Title } from './styles'
import { EvaluationListObject } from '../../../types/entities'
import { Colors, Containers } from '../../styles'

import React from 'react'
import { EyeIcon } from 'react-native-heroicons/outline'
import { TouchableOpacity, View } from 'react-native'

interface ClientEvaluationsListProps {
  evaluationList: EvaluationListObject[]
  navigation: any
}

export const ClientEvaluationsList = (props: ClientEvaluationsListProps) => {
  const { evaluationList, navigation } = props

  return (
    <View style={{}}>
      <Label>Ultimas avaliações</Label>
      <List
        list={evaluationList}
        emptyListMessage={'Nenhuma avaliação encontrada'}
        ItemComponent={({ item }: {item: EvaluationListObject}) => {
          const createdAt = new Date(item.createdAt)
          return (
            <View style={[Containers.listItem,]}>
              <Title>Data da avaliação: {createdAt.getDate()}/{createdAt.getMonth()}/{createdAt.getFullYear()}</Title>
              <TouchableOpacity style={{ marginLeft: 'auto' }} onPress={() => navigation.navigate('Evaluation', { evaluationUid: item.uid })}>
                <EyeIcon color={Colors.darkGray}/>
              </TouchableOpacity>
            </View>
          )
        }}
      />
    </View>
  )
}
