import { RFPercentage } from 'react-native-responsive-fontsize'

const xl3 = RFPercentage(4)
const xl2 = RFPercentage(3.6)
const xl = RFPercentage(3.1)
const lg = RFPercentage(3)
const md = RFPercentage(2.3)
const sm = RFPercentage(2.2)
const xs = RFPercentage(1.8)

export const FontSizes = {
  xl3: xl3 >= 33 ? 33 : xl3,
  xl2: xl2 >= 27 ? 27 : xl2,
  xl: xl >= 21 ? 21 : xl,
  lg: lg >= 19 ? 19 : lg,
  md: md >= 17 ? 17 : md,
  sm: sm >= 15 ? 15 : sm,
  xs: xs >= 13 ? 13 : xs,
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