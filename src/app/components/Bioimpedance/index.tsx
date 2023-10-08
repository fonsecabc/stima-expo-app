import { Sex } from '@enums'
import { getAge } from '@helpers'
import { Client } from '@entities'
import { NumberDisplay, BarChartDisplay } from '@components'
import { Container, Label } from '@components/Bioimpedance/styles'

interface BioimpedanceProps {
  bioimpedance: any
  client: Client
}

function getFatPercentageState(fatPercentage: number, sex: Sex) {
  if (sex === Sex.FEMALE) {
    return fatPercentage < 13 ? 'abaixo'
      : fatPercentage >= 13 && fatPercentage < 25 ? 'normal'
        : fatPercentage >= 25 && fatPercentage < 30 ? 'acima'
          : fatPercentage >= 30 ? 'muito acima'  
            : 'normal'
  } else {
    return fatPercentage < 6 ? 'abaixo'
      : fatPercentage >= 6 && fatPercentage < 17 ? 'normal'
        : fatPercentage >= 17 && fatPercentage < 24 ? 'acima'
          : fatPercentage >= 25 ? 'muito acima' 
            : 'normal'
  }
}

function getMetabolicAgeState(metabolicAge: number, age: number) {
  return metabolicAge < age ? 'abaixo' 
    : metabolicAge > age ? 'acima' 
      : 'normal'
}

function getImc(height: number, weight: number): { 
  value: number,
  state: 'abaixo' | 'normal' | 'acima' | 'muito acima'
} {
  const imc = Number((weight / (height * height) * 10000).toFixed(1))
  const state = imc < 18.5 ? 'abaixo' : imc < 25 ? 'normal' : imc < 30 ? 'acima' : 'muito acima'

  return { value: imc, state }
}

export const Bioimpedance = (props: BioimpedanceProps) => {
  const { bioimpedance, client } = props

  const fatPercentageState = getFatPercentageState(+bioimpedance.fatPercentage, client.sex)
  const imc = getImc(client.height, client.weight)
  const visceralFatState = bioimpedance.visceralFat < 8 ? 'normal' : bioimpedance.visceralFat > 10 ? 'acima' : 'muito acima'

  return (
    <>
      <Label>Análise de obesidade</Label>
      <Container>
        <BarChartDisplay
          value={imc.value}
          maxValue={35}
          minValue={0}
          state={imc.state}
          title='IMC' 
          description='kg/m2' 
        />
      </Container>
      <Container>
        <BarChartDisplay
          value={+bioimpedance.fatPercentage}
          maxValue={50}
          minValue={0}
          state={fatPercentageState}
          title='Gordura Corporal' 
          description='%' 
        />
      </Container>
      <Label>Bioimpedância</Label>
      <Container>
        <NumberDisplay 
          number={bioimpedance.visceralFat} 
          state={visceralFatState} 
          title='Gordura Visceral' 
          description='' 
        />
        <NumberDisplay 
          number={bioimpedance.muscleMassPercentage} 
          state={'normal'} 
          title='Massa Magra'
          description='%' 
        />
      </Container>
      <Container>
        <NumberDisplay 
          number={bioimpedance.metabolicAge} 
          state={getMetabolicAgeState(bioimpedance.metabolicAge, getAge(client.dateOfBirth))}
          title='Idade Metabólica' 
          description='anos' 
        />
        <NumberDisplay 
          number={bioimpedance.basalMetabolicRate} 
          state={'normal'}
          title='Taxa Basal' 
          description='kcal' 
        />
      </Container>
    </>
  )
}
