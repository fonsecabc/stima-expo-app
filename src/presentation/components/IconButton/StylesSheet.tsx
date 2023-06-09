import { StyleSheet } from 'react-native'
import { Colors, Shadows, Height } from '../../styles'

export const styleSheet = StyleSheet.create({
    icon: {
        color: Colors.black,
    },
    container: {
        margin: 20,
        padding: 20,
        height: Height,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius:  16, 
        backgroundColor: Colors.white,
        ...Shadows.default
    },
})