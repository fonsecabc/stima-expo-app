import React from 'react'
import { Modal, ActivityIndicator } from 'react-native'
import { Colors } from '../../styles'
import { styleSheet } from './StylesSheet'

export const Loader = () => {
    return (
        <Modal
            animationType='fade'
        >
            <ActivityIndicator 
                style={styleSheet.container}
                size={'large'}
                color={Colors.lightBlue}
            />
        </Modal>
    )
}

