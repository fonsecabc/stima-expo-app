import { StyleSheet } from 'react-native'
import { Colors, Shadows, Fonts } from '../../../styles'


export const styleSheet = StyleSheet.create({
    image: {
        width: '300',
        height: 'auto',
    },
    container: {
        margin: 20,
        padding: 20,
        borderRadius: 16,
        backgroundColor: Colors.white,
        alignSelf: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        ...Shadows.default
    },
    title: {
        fontSize: Fonts.xl,
        fontWeight: '500',
        margin: 15,
        color: Colors.black,
        textAlign: 'center'
    },
    text: {
        fontSize: Fonts.sm,
        color: Colors.black,
        textAlign: 'center',
        marginHorizontal: 20
    },
    link: {
        fontSize: Fonts.sm,
        fontWeight: '500',
        color: Colors.lightBlue,
        textAlign: 'center',
        borderBottomWidth: 1,
        borderBottomColor: Colors.lightBlue
    },
})
