import { StyleSheet } from 'react-native'
import { Colors, Shadows, Fonts } from '../../../styles'


export const styleSheet = StyleSheet.create({
    image: {
        width: 100,
        height: 20,
        margin: 20
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
        color: Colors.darkGray,
        textAlign: 'center'
    },
    passwordValidatorContainer: {
        flexDirection: 'row',
        margin: 20,
        marginVertical: 5,
        justifyContent: 'space-between',
        paddingHorizontal: 5,
    },
    passwordValidator: {
        flex: 1/4.5,
        borderRadius: 30,
        backgroundColor: Colors.lightGray,
        padding: 5
    },
    passwordValidator1: {
        backgroundColor: Colors.red,
        color: Colors.red,
    },
    passwordValidator2: {
        backgroundColor: Colors.orange,
        color: Colors.orange,
    },
    passwordValidator3: {
        backgroundColor: Colors.yellow,
        color: Colors.yellow,
    },
    passwordValidator4: {
        backgroundColor: Colors.green,
        color: Colors.green,
    },
    smText: {
        paddingHorizontal: 5,
        fontSize: Fonts.xs,
        fontWeight: '500',
        color: Colors.darkGray,
        textAlign: 'left',
        marginHorizontal: 20
    },
    text: {
        fontSize: Fonts.sm,
        color: Colors.darkGray,
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
