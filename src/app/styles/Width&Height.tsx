import { RFPercentage } from 'react-native-responsive-fontsize'

export const Width = RFPercentage(80)  >= 300 ? 300 : RFPercentage(80)
export const Height = RFPercentage(10) >= 60 ? 60 : RFPercentage(5)
