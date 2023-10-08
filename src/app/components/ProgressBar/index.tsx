import { Colors } from '@styles'
import { Label } from '@components/ProgressBar/style'

import React from 'react'
import { Bar } from 'react-native-progress'

interface ProgressBarProps {
  progress: number
}

export const ProgressBar = ({ progress }: ProgressBarProps) => {
  return (
    <>
      <Label>Progresso {progress * 100}%</Label>
      <Bar
        style={{ marginHorizontal: 25, marginTop: 10 }}
        animated={true}
        progress={progress}
        width={null}
        height={10}
        borderWidth={0}
        unfilledColor={Colors.white}
        color={Colors.lightBlue}
      />
    </>
  )
}
