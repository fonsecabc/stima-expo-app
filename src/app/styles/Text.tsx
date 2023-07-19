import { Colors } from './Colors'
import { FontSizes, Fonts } from './Fonts'

import { StyleSheet } from 'react-native'

export const Texts = StyleSheet.create({
  lg: {
    fontSize: FontSizes.lg,
    fontFamily: Fonts.medium,
    color: Colors.darkGray,
  },
  md: {
    fontSize: FontSizes.md,
    fontFamily: Fonts.medium,
    color: Colors.darkGray,
  },
  sm: {
    fontSize: FontSizes.sm,
    color: Colors.darkGray,
  },
  xs: {
    fontSize: FontSizes.xs,
    color: Colors.darkGray,
  },
})