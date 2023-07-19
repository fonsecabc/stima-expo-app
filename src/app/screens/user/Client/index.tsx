import { useAuth } from '../../../contexts'
import { NavBar, HeaderTitle, Screen, } from '../../../components'
import { getClient as getClientRequest } from '../../../../modules/_requests'

import Toast from 'react-native-toast-message'
import React, { useEffect, useState } from 'react'

type ClientScreenProps = { 
  navigation: any
  route: any
}

export const ClientScreen = ({ navigation, route }: ClientScreenProps) => {
  const { accessToken, currentUser } = useAuth()
  const { clientUid } = route.params

  const [client, setClient] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () =>  {
      setIsLoading(true)
      const client = await getClient()
      setClient(client)
      setIsLoading(false)
    }
    fetchData()
  }, [])
    
  const getClient = async () => {
    const response = await getClientRequest({
      accessToken: await accessToken(),
      uid: clientUid,
      userUid: currentUser?.uid ?? ''
    })
    if (response instanceof Error) {
      Toast.show({ type: 'error', text1: response.message })
      return {}
    }

    return response.data
  }

  return (
    <Screen background='gray'>
      <HeaderTitle navigation={navigation} goBack={true}/>
      <NavBar navigation={navigation} activeScreen={2}/>
    </Screen>
  )
}
