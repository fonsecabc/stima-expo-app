import { NumberDisplay } from '@components'
import { ClientsEvaluationHistory } from '@entities'
import { Container, Label } from '@components/ClientsOverallResult/styles'

interface ClientOverallResultsProps {
  overallResults: ClientsEvaluationHistory['overallResults']
}

export const ClientOverallResults = ({ overallResults }: ClientOverallResultsProps) => {
  const { fatPercentage, muscleMassPercentage, visceralFat, weight } = overallResults

  return (
    <>
      <Label>Resultados Gerais</Label>
      <Container>
        <NumberDisplay
          number={fatPercentage < 0 ? fatPercentage : `+${fatPercentage}`}
          title='Gordura Corporal'
          description='%'
        />
        <NumberDisplay
          number={muscleMassPercentage < 0 ? muscleMassPercentage : `+${muscleMassPercentage}`}
          title='Massa Magra'
          description='%'
        />
      </Container>
      <Container>
        <NumberDisplay
          number={visceralFat < 0 ? visceralFat : `+${visceralFat}`}
          title='Gordura Visceral'
          description=''
        />
        <NumberDisplay
          number={weight < 0 ? weight : `+${weight}`}
          title='Peso'
          description='kg'
        />
      </Container>
    </>
  )
}
