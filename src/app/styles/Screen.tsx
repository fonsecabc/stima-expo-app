import { Dimensions } from 'react-native'

export let { width } = Dimensions.get('window') 
width = width < 500 ? width : 500

export const getPercentOfWidth = (percent: number) => (percent * width) / 100
