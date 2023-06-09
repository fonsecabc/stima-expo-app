import { RFPercentage } from 'react-native-responsive-fontsize'

const xl = RFPercentage(3.2)
const lg = RFPercentage(2.6)
const md = RFPercentage(2)
const sm = RFPercentage(1.8)
const xs = RFPercentage(1.4)

export const Fonts = {
    xl: xl >= 26 ? 26 : xl,
    lg: lg >= 22 ? 22 : lg,
    md: md >= 18 ? 18 : md,
    sm: sm >= 16 ? 16 : sm,
    xs: xs >= 12 ? 12 : xs,
}