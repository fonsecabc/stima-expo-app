import { StyleSheet } from 'react-native'
import { Colors, Shadows, Fonts, Height } from '../../styles'

export const styleSheet = StyleSheet.create({
    icon: {
        marginLeft: 'auto',
        color: Colors.lightBlue,
    },
    textInput: {
        marginRight: 'auto',
        color: Colors.black,
        fontWeight: '500',
        fontSize: Fonts.md,
        flex: 1,
        outlineWidth: '0'
    },
    container: {
        marginBottom: 'auto',
        margin: 20,
        marginVertical: 10,
        padding: 20,
        height: Height,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius:  16, 
        backgroundColor: Colors.white,
        ...Shadows.default
    },
})