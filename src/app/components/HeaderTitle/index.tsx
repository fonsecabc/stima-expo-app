import { HeaderTitleContainer, HeaderTitleText, NotificationIcon } from './styles'

import React from 'react'
import { TouchableOpacity } from 'react-native'


interface HeaderTitleProps {
  navigation: any
  title: string
}

export const HeaderTitle: React.FC<HeaderTitleProps> = ({ navigation, title }: HeaderTitleProps) => {
    const handlePress = {
        notifications: () => {
            navigation.navigate('Notifications')
        },
    }

    return (
        <HeaderTitleContainer>
            <HeaderTitleText>{title}</HeaderTitleText>
            <TouchableOpacity onPress={handlePress.notifications}>
                <NotificationIcon size={30} />
            </TouchableOpacity>
        </HeaderTitleContainer>
    )
}
