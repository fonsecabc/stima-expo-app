import { StyleSheet } from 'react-native'
import { Colors, Shadows, Fonts, Height } from '../../styles'

export const styleSheet = StyleSheet.create({
    icon: {
        marginLeft: 'auto',
        color: Colors.darkGray,
    },
    title: {
        marginRight: 'auto',
        color: Colors.darkGray,
        fontWeight: '500',
        fontSize: Fonts.md,
    },
    container: {
        marginBottom: 'auto',
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