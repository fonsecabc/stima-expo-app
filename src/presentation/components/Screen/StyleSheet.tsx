import { StyleSheet } from 'react-native'
import { Colors } from '../../styles'

export const styleSheet = StyleSheet.create({
    screen: {
        ...StyleSheet.absoluteFillObject,
    },
    backgroundGray: {
        backgroundColor: Colors.lightGray
    },
    backgroundBlue: {
        backgroundColor: Colors.lightBlue
    }
})
