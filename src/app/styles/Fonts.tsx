import { RFPercentage } from 'react-native-responsive-fontsize'

const xl2 = RFPercentage(3.6)
const xl = RFPercentage(3.2)
const lg = RFPercentage(3)
const md = RFPercentage(2.3)
const sm = RFPercentage(2)
const xs = RFPercentage(1.8)

export const FontSizes = {
  xl2: xl2 >= 26 ? 26 : xl2,
  xl: xl >= 26 ? 26 : xl,
  lg: lg >= 22 ? 22 : lg,
  md: md >= 20 ? 20 : md,
  sm: sm >= 18 ? 18 : sm,
  xs: xs >= 16 ? 16 : xs,
}

export const Fonts = {
  thin: 'Outfit_100Thin',
  extraLight: 'Outfit_200ExtraLight',
  light: 'Outfit_300Light',
  regular: 'Outfit_400Regular',
  medium: 'Outfit_500Medium',
  semiBold: 'Outfit_600SemiBold',
  bold: 'Outfit_700Bold',
  extraBold: 'Outfit_800ExtraBold',
  black: 'Outfit_900Black',
}