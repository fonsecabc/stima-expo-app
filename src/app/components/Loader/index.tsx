import { Colors } from '../../styles'

import React from 'react'
import { ActivityIndicator } from 'react-native'

export const Loader: React.FC = () => {
    return (
        <ActivityIndicator
            color={Colors.white}
            size='small'
            style={{ flex: 1 }}
        />
    )
}
