import { RFPercentage } from 'react-native-responsive-fontsize'

export const Width = RFPercentage(80)  >= 300 ? 300 : RFPercentage(80)
export const Height = RFPercentage(5) >= 60 ? 60 : RFPercentage(5)
