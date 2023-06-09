import { StyleSheet } from 'react-native'
import { Colors, Fonts } from '../../styles'

export const styleSheet = StyleSheet.create({
    textInput: {
        marginRight: 'auto',
        color: Colors.black,
        fontSize: Fonts.md,
        flex: 1,
        outlineWidth: 0,
    },
    invalidTextInput: {
        borderColor: Colors.red,
    },
    validTextInput: {
        borderColor: Colors.lightBlue,
    },
    icon: {
        marginLeft: 'auto',
        color: Colors.black,
    },
    container: {
        margin: 20,
        marginVertical: 5,
        padding: 20,
        height: Fonts.md * 2,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius:  16,
        borderWidth: 2,
        borderColor:  Colors.lightGray,
        backgroundColor: Colors.lightGray
    }
})