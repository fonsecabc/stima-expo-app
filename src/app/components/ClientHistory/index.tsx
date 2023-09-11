import { Label } from './styles'
import { formatDate } from '../../../modules/_helpers'
import { LineChartDisplay } from '../LineChartDisplay'
import { ClientsEvaluationHistory, HistoryObject } from '../../../types/entities'

import React from 'react'

interface ClientHistoryProps {
  history: ClientsEvaluationHistory['history']
}

function formatHistory(history: HistoryObject[]) {
  return {
    dates: history.map((history) => formatDate(history.date)).reverse(),
    values: history.map((history) => +history.value).reverse()
  }
}

export const ClientHistory = (props: ClientHistoryProps) => {
  const { history } = props

  const weightHistory = formatHistory(history.weight)
  const visceralFatHistory = formatHistory(history.visceralFat)
  const metabolicAgeHistory = formatHistory(history.metabolicAge)
  const fatPercentageHistory = formatHistory(history.fatPercentage)
  const basalMetabolicRateHistory = formatHistory(history.basalMetabolicRate)
  const muscleMassPercentageHistory = formatHistory(history.muscleMassPercentage)

  return (
    <>
      <Label>Historico</Label>
      <LineChartDisplay
        title='Peso em Kilos'
        yAxisLabel='kg'
        xAxisLabels={weightHistory.dates}
        xAxisValues={weightHistory.values}
        color={'darkBlue'}
        fromNumber={Math.max(...weightHistory.values) + 2}
      />
      <LineChartDisplay
        title='Percentual de Gordura'
        yAxisLabel='%'
        xAxisLabels={fatPercentageHistory.dates}
        xAxisValues={fatPercentageHistory.values}
        color={'green'}
        fromNumber={Math.max(...fatPercentageHistory.values) + 2}
      />
      <LineChartDisplay
        title='Percentual de Massa Magra'
        yAxisLabel='%'
        xAxisLabels={muscleMassPercentageHistory.dates}
        xAxisValues={muscleMassPercentageHistory.values}
        color={'lightBlue'}
        fromNumber={Math.max(...muscleMassPercentageHistory.values) + 2}
      />
      <LineChartDisplay
        title='Metabolismo Basal em Kcal'
        yAxisLabel=''
        xAxisLabels={basalMetabolicRateHistory.dates}
        xAxisValues={basalMetabolicRateHistory.values}
        color={'green'}
        fromNumber={Math.max(...basalMetabolicRateHistory.values) + 100}
      />
      <LineChartDisplay
        title='Gordura Visceral'
        yAxisLabel=''
        xAxisLabels={visceralFatHistory.dates}
        xAxisValues={visceralFatHistory.values}
        color={'green'}
        fromNumber={Math.max(...visceralFatHistory.values) + 1}
        fromZero={true}
      />
      <LineChartDisplay
        title='Idade Metabólica'
        yAxisLabel=''
        xAxisLabels={metabolicAgeHistory.dates}
        xAxisValues={metabolicAgeHistory.values}
        color={'green'}
        fromNumber={Math.max(...metabolicAgeHistory.values) + 2}
        fromZero={true}
      />
    </>
  )
}
