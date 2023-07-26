import { Dimensions } from 'react-native'


export let { width } = Dimensions.get('window')

width = width < 600 ? width : 600

export function getPercentOfWidth(percent: number) {
  return (percent * width) / 100
}
