import { 
  Display,
  DisplayLabel,
  DisplayState,
  DisplayText,  
} from './styles'
import { Colors } from '../../styles'

import React from 'react'
import { View } from 'react-native'
import { BarChart, XAxis } from 'react-native-svg-charts'

interface BarChartDisplayProps {
  state: 'normal' | 'acima' | 'muito acima' | 'abaixo'
  title: string
  description: string
  value: number
  maxValue: number
  minValue: number
}

export const BarChartDisplay = (props: BarChartDisplayProps) => {
  const { title, value, description, state, maxValue, minValue } = props

  const color = state === 'abaixo' ? Colors.yellow 
    : state === 'acima' ? Colors.orange 
      :  state === 'muito acima' ? Colors.red 
        : Colors.green

  const xValues: number[] = []
  for (let i = minValue; i <= maxValue; i += 0.5) {
    xValues.push(i)
  }

  const obesityState = state === 'muito acima' ? 'Obesidade' 
    : state === 'acima' ? 'Sobrepeso' 
      : state === 'abaixo' ? 'Abaixo do peso'
        : 'Saudável'
  
  return (
    <Display>
      <DisplayLabel>{title}</DisplayLabel>
      <DisplayState state={state}>{obesityState}</DisplayState>
      <DisplayText>{value}{description}</DisplayText>
      <View style={{ flexDirection: 'row' }}>
        <BarChart
          style={{ flex: 1, height: 50 }}
          data={[ value ]}
          horizontal={true}
          svg={{ fill: color, fillOpacity: 0.8 }}
          contentInset={{ top: 10, bottom: 10 }}
          gridMin={minValue}
          gridMax={maxValue}
          xMax={maxValue}
          xMin={minValue}
        >
        </BarChart>
      </View>
      <XAxis
        data={[minValue, maxValue]}
        formatLabel={(index) => [minValue, maxValue][index]}
        contentInset={{ left: 5, right: 10 }}
        svg={{ fill: Colors.darkGray, fontSize: 10 }}
      />

    </Display>
  )
}
