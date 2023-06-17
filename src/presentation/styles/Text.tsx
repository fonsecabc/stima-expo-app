import { Colors } from './Colors'
import { Fonts } from './Fonts'
import { StyleSheet } from 'react-native'

export const Texts = StyleSheet.create({
    lg: {
        fontSize: Fonts.lg,
        fontWeight: '500',
        color: Colors.darkGray,
    },
    md: {
        fontSize: Fonts.md,
        fontWeight: '500',
        color: Colors.darkGray,
    },
    sm: {
        fontSize: Fonts.sm,
        color: Colors.darkGray,
    },
    xs: {
        fontSize: Fonts.xs,
        color: Colors.darkGray,
    },
})