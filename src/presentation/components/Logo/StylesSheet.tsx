import { RFPercentage } from 'react-native-responsive-fontsize'
import { StyleSheet } from 'react-native'

const height = RFPercentage(10) >= 80 ? 80 : RFPercentage(10)

export const styleSheet = StyleSheet.create({
    logo: {
        margin: 30,
        marginBottom: 10,
        width: height * 3,
        height: height,
        alignSelf: 'center'
    }
})