import { StyleSheet } from 'react-native'
import { Colors, Shadows } from '../../styles'

export const styleSheet = StyleSheet.create({
    icon: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        color: Colors.black,
        fontWeight: '500'
    },
    activeIcon: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        color: Colors.lightBlue,
        fontWeight: '500'
    },
    container: {
        marginTop: 'auto',
        backgroundColor: Colors.white,
        height: 80,
        padding: 10,
        paddingBottom: 15,
        paddingHorizontal: 30,
        flexDirection: 'row',
        alignItems: 'center',
        ...Shadows.default
    },
})