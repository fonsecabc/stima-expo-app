import { StyleSheet } from 'react-native'
import { Colors, Fonts, Shadows } from '../../styles'

export const styleSheet = StyleSheet.create({
    icon: {
        marginLeft: 'auto',
        color: Colors.white,
    },
    textLeft: {
        marginRight: 'auto',
        color: Colors.white,
        fontWeight: '500',
        fontSize: Fonts.md
    },
    textCentered: {
        color: Colors.white,
        fontWeight: '500',
        fontSize: Fonts.md
    },
    container: {
        margin: 20,
        marginVertical: 10,
        padding: 20,
        height: Fonts.lg * 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:  40, 
        backgroundColor: Colors.lightBlue,
        ...Shadows.default
    },
})