import { 
  Display,
  Label,
  Container
} from './styles'
import { Colors } from '../../styles'

import React from 'react'
import { View } from 'react-native'
import { Grid, LineChart, XAxis, YAxis } from 'react-native-svg-charts'

interface LineChartDisplayProps {
  yAxisValues?: number[]
  xAxisValues?: number[]
  title: string
  description?: string
  values?: number[]
}

export const LineChartDisplay = (props: LineChartDisplayProps) => {
  const { title  } = props

  const data = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ]
  const axesSvg = { fontSize: 10, fill: 'grey' };
  
  return (
    <>
      <Label>{title}</Label>
      <Container>
        <Display>
          <View style={{ height: 200, flexDirection: 'row' }}>
            <YAxis
              data={data}
              style={{ marginBottom: 10 }}
              contentInset={{ top: 10, bottom: 10 }}
              svg={axesSvg}
            />
            <View style={{ flex: 1, marginLeft: 10 }}>
              <LineChart
                style={{ flex: 1 }}
                data={data}
                contentInset={{ top: 10, bottom: 10 }}
                svg={{ stroke: Colors.lightBlue, strokeWidth: 2,  }}
              >
                <Grid/>
              </LineChart>
              <XAxis
                style={{ marginHorizontal: -10, height: 10 }}
                data={data}
                formatLabel={(value, index) => index}
                contentInset={{ left: 10, right: 10 }}
                svg={axesSvg}
              />
            </View>
          </View>
        </Display>
      </Container>
    </>
  )
}
