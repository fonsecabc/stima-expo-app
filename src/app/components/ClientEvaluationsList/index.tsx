import { formatDate } from '@helpers'
import { Colors, Containers } from '@styles'
import { EvaluationListObject } from '@entities'
import { Label, Title, Container } from '@components/ClientEvaluationsList/styles'

import React from 'react'
import { EyeIcon } from 'react-native-heroicons/outline'
import { TouchableOpacity } from 'react-native'

interface ClientEvaluationsListProps {
  evaluationList: EvaluationListObject[]
  action: (evaluation: EvaluationListObject) => void
}

export const ClientEvaluationsList = (props: ClientEvaluationsListProps) => {
  const { evaluationList, action } = props

  const items = evaluationList.map((evaluation) => {
    const createdAt = formatDate(evaluation.createdAt)
    return (
      <Containers.ListItem key={evaluation.uid}>
        <Title>Data da avaliação: {createdAt}</Title>
        <TouchableOpacity style={{ marginLeft: 'auto' }} onPress={() => action(evaluation)}>
          <EyeIcon color={Colors.darkGray}/>
        </TouchableOpacity>
      </Containers.ListItem>
    )
  })

  return (
    <Container>
      <Label>Ultimas avaliações</Label>
      {items}
    </Container>
  )
}
