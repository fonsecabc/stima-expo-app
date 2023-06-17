import { HeaderTitleContainer, HeaderTitleText, NotificationIcon } from './styles'

import React from 'react'
import { TouchableOpacity } from 'react-native'


interface HeaderTitleProps {
  navigation: any
  title: string
}


export const HeaderTitle: React.FC<HeaderTitleProps> = (props: HeaderTitleProps) => {
    const handlePress = {
        notifications: () => {
            props.navigation.navigate('Notifications')
        },
    }

    return (
        <HeaderTitleContainer>
            <HeaderTitleText>{props.title}</HeaderTitleText>
            <TouchableOpacity onPress={handlePress.notifications}>
                <NotificationIcon size={30} />
            </TouchableOpacity>
        </HeaderTitleContainer>
    )
}
