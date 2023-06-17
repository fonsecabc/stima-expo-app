import React from 'react'
import { ActivityIndicator } from 'react-native'
import { Colors } from '../../styles'

export const Loader: React.FC = () => {
    return (
        <ActivityIndicator
            color={Colors.white}
            size='small'
            style={{ flex: 1 }}
        />
    )
}
