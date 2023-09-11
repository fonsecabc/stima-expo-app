import { Avatar } from '../Avatar'
import { Sex } from '../../../types/enums'
import { Client } from '../../../types/entities'
import { getAge } from '../../../modules/_helpers'
import { 
  Container,
  Description,
  Text,
  Title
} from './styles'

import React from 'react'
import { View } from 'react-native'

interface ClientInfoDisplayProps {
  client: Client
}

export const ClientInfoDisplay = (props: ClientInfoDisplayProps) => {
  const { client } = props

  const clientsAge = getAge(client.dateOfBirth)

  return (
    <Container>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={{ alignSelf: 'flex-start' }}>
          <Avatar letter={client.name.charAt(0)}/>
        </View>
        <View style={{ marginLeft: 10 }}>
          <Title>{client.name}</Title>
          <Text>Idade: <Description>{clientsAge}</Description></Text>
          <Text>Sexo: <Description>{client.sex === Sex.MALE ? 'Masculino' : 'Feminino'}</Description></Text>
          <Text>Telefone: <Description>{client.phone}</Description></Text>
          {client.email !== '' && <Text>Email: <Description>{client.email}</Description></Text>}
          <Text>Data de nascimento: <Description>{client.dateOfBirth}</Description></Text>
        </View>
      </View>
    </Container>
  )
}
