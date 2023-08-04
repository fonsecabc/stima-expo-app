import { Avatar } from '../Avatar'
import { Sex } from '../../../types/enums'
import { Client } from '../../../types/entities'
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

  function getAge(dateOfBirth: string) {
    const today = new Date()
    const [day, month, year] = dateOfBirth.split('/')
    const birthDate = new Date(`${year}-${month}-${day}`)
    let age = today.getFullYear() - birthDate.getFullYear()
    const monthDiff = today.getMonth() - birthDate.getMonth()
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate()) ||
      (monthDiff === 0 && today.getDate() === birthDate.getDate() && today.getFullYear() < birthDate.getFullYear())
    ) {
      age--
    }
    return age
  }

  return (
    <View style={{ marginTop: 20 }}>
      <Container>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ alignSelf: 'flex-start' }}>
            <Avatar letter={client.name.charAt(0)}/>
          </View>
          <View style={{ marginLeft: 10 }}>
            <Title>{client.name}</Title>
            <Text>Idade: <Description>{getAge(client.dateOfBirth)}</Description></Text>
            <Text>Sexo: <Description>{client.sex === Sex.MALE ? 'Masculino' : 'Feminino'}</Description></Text>
            <Text>Telefone: <Description>{client.phone}</Description></Text>
            {client.email !== '' && <Text>Email: <Description>{client.email}</Description></Text>}
            <Text>Data de nascimento: <Description>{client.dateOfBirth}</Description></Text>
          </View>
        </View>
      </Container>
    </View>
  )
}
