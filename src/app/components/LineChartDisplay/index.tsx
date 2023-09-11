import { 
  Display,
  DisplayLabel,
  Container
} from './styles'
import { Colors } from '../../styles'

import React from 'react'
import { LineChart } from 'react-native-chart-kit'
import { getPercentOfWidth } from '../../styles/Screen'

interface LineChartDisplayProps {
  yAxisLabel?: string
  xAxisValues: number[]
  xAxisLabels: string[]
  title: string
  description?: string
  values?: number[]
  fromNumber: number
  fromZero?: boolean
  color: 'lightBlue' | 'darkBlue' | 'green' 
}

export const LineChartDisplay = (props: LineChartDisplayProps) => {
  const { title, yAxisLabel, xAxisLabels, xAxisValues, color, fromNumber, fromZero = false } = props

  const data = {
    labels: xAxisLabels,
    datasets: [
      {
        data: xAxisValues,
        strokeWidth: 2,
      },
    ],
  }

  return (
    <>
      <Container>
        <Display>
          <DisplayLabel>{title}</DisplayLabel>  
          <LineChart
            data={data}
            height={220}
            width={getPercentOfWidth(80)}
            style={{
              marginBottom: -10,
              marginLeft: -18,
            }}
            yLabelsOffset={15}
            yAxisSuffix={yAxisLabel}
            chartConfig={{
              propsForBackgroundLines: {
                stroke: Colors.darkGray,
                strokeWidth: 1
              },
              labelColor: () => Colors.darkGray,
              color: () => Colors[color],
              decimalPlaces: 0,
            }}
            fromNumber={fromNumber}
            segments={data.datasets[0].data.length}
            fromZero={fromZero}
            transparent
            bezier
          />
        </Display>
      </Container>
    </>
  )
}
