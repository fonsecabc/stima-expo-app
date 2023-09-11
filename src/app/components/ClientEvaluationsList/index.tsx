import { Label, Title, Container } from './styles'
import { EvaluationListObject } from '../../../types/entities'
import { Colors, Containers } from '../../styles'

import React from 'react'
import { EyeIcon } from 'react-native-heroicons/outline'
import { TouchableOpacity, View } from 'react-native'
import { formatDate } from '../../../modules/_helpers'

interface ClientEvaluationsListProps {
  evaluationList: EvaluationListObject[]
  navigation: any
}

export const ClientEvaluationsList = (props: ClientEvaluationsListProps) => {
  const { evaluationList, navigation } = props

  const items = evaluationList.map((evaluation) => {
    const createdAt = formatDate(evaluation.createdAt)
    return (
      <View key={evaluation.uid} style={[Containers.listItem,]}>
        <Title>Data da avaliação: {createdAt}</Title>
        <TouchableOpacity style={{ marginLeft: 'auto' }} onPress={() => navigation.navigate('Evaluation', { evaluationUid: evaluation.uid })}>
          <EyeIcon color={Colors.darkGray}/>
        </TouchableOpacity>
      </View>
    )
  })

  return (
    <>
      <Label>Ultimas avaliações</Label>
      <Container>
        {items}
      </Container>
    </>
  )
}
