import { Colors } from './Colors'
import { Fonts } from './Fonts'
import { Shadows } from './Shadows'
import { StyleSheet } from 'react-native'

export const Containers = StyleSheet.create({
    default: {
        flex: 1,
        margin: 0,
        borderRadius: 16,
        padding: 20,
        backgroundColor: Colors.white,
        height: 100,
        ...Shadows.default
    },
    list_item: {
        marginBottom: 10,
        padding: 20,
        height: Fonts.md * 3,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 16,
        backgroundColor: Colors.white,
        ...Shadows.default
    }
})