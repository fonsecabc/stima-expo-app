import { GoBackIcon, HeaderTitleContainer, HeaderTitleText, NotificationIcon } from './styles'

import React from 'react'
import { TouchableOpacity } from 'react-native'

interface HeaderTitleProps {
  navigation: any
  title?: string
  goBack?: true
}

export const HeaderTitle: React.FC<HeaderTitleProps> = ({ navigation, title, goBack }: HeaderTitleProps) => {
  const handlePress = {
    notifications: () => {
      navigation.navigate('Notifications')
    },
    goBack: () => {
      navigation.goBack()
    }
  }

  return (
    <HeaderTitleContainer>
      {goBack && 
                <TouchableOpacity onPress={handlePress.goBack}>
                  <GoBackIcon/>
                </TouchableOpacity>
      }
      <HeaderTitleText>{goBack ? 'Voltar' : title}</HeaderTitleText>
      <TouchableOpacity onPress={handlePress.notifications}>
        <NotificationIcon/>
      </TouchableOpacity>
    </HeaderTitleContainer>
  )
}
