import { StyleSheet } from 'react-native'
import { Colors, Fonts } from '../../styles'

export const styleSheet = StyleSheet.create({
    iconRed: {
        marginRight: 10,
        color: Colors.red,
    },
    iconGreen: {
        marginRight: 10,
        color: Colors.green,
    },
    text: {
        marginRight: 'auto',
        color: Colors.black,
        fontWeight: '500',
        fontSize: Fonts.md
    },
    container: {
        padding: 20,
        height: Fonts.md * 2,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10, 
        position: 'absolute',
        margin: 20,
    },
})