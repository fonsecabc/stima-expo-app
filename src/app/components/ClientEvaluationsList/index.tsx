import { formatDate } from '@helpers'
import { Colors, Containers } from '@styles'
import { EvaluationListObject } from '@entities'
import { Label, Title, Container } from '@components/ClientEvaluationsList/styles'

import React from 'react'
import { EyeIcon } from 'react-native-heroicons/outline'
import { TouchableOpacity } from 'react-native'

interface ClientEvaluationsListProps {
  evaluationList: EvaluationListObject[]
  navigation: any
}

export const ClientEvaluationsList = (props: ClientEvaluationsListProps) => {
  const { evaluationList, navigation } = props

  const items = evaluationList.map((evaluation) => {
    const createdAt = formatDate(evaluation.createdAt)
    return (
      <Containers.ListItem key={evaluation.uid}>
        <Title>Data da avaliação: {createdAt}</Title>
        <TouchableOpacity style={{ marginLeft: 'auto' }} onPress={() => navigation.navigate('Evaluation', { evaluationUid: evaluation.uid })}>
          <EyeIcon color={Colors.darkGray}/>
        </TouchableOpacity>
      </Containers.ListItem>
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
