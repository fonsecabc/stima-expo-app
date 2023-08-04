import { Sex } from '../../../types/enums'
import { NumberDisplay } from '../NumberDisplay'
import { Container, Label } from './styles'
import { Client } from '../../../types/entities'

interface BodyCompositionProps {
  client: Client
}

function getImc(height: number, weight: number, sex: Sex): { 
  value: number,
  state: 'abaixo' | 'normal' | 'acima' | 'muito acima'
} {
  const imc = Number((weight / (height * height) * 10000).toFixed(1))
  const state = sex === Sex.MALE
    ? imc < 20.7 ? 'abaixo' : imc < 26.4 ? 'normal' : imc < 27.8 ? 'acima' : 'muito acima'
    : imc < 19.1 ? 'abaixo' : imc < 25.8 ? 'normal' : imc < 27.3 ? 'acima' : 'muito acima'

  return { value: imc, state }
}

export const BodyComposition = (props: BodyCompositionProps) => {
  const { client } = props

  const imc = getImc(client.height, client.weight, client.sex)

  return (
    <>
      <Label>Composição Corporal</Label>
      <Container>
        <NumberDisplay
          number={client.weight}
          title='Peso'
          description='kg'
          state={imc.state}
        />
        <NumberDisplay
          number={client.height}
          title='Altura'
          description='cm'
        />
      </Container>
    </>
  )
}
