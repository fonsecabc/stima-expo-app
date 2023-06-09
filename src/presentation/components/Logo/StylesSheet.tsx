import { RFPercentage } from 'react-native-responsive-fontsize'
import { StyleSheet } from 'react-native'

const height = RFPercentage(20)  >= 100 ? 100 : RFPercentage(80)
console.log(height)

export const styleSheet = StyleSheet.create({
    logo: {
        margin: 20,
        marginBottom: 0,
        width: height * 3,
        height: height,
        alignSelf: 'center'
    }
})