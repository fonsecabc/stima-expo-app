import { StyleSheet } from 'react-native'
import { Colors } from '../../styles'

export const styleSheet = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: Colors.slate
    }
})