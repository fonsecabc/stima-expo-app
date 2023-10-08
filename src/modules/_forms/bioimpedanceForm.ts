import { input } from '@entities'

export const bioimpedanceForm: input[] = [
  {
    name: 'fatPercentage',
    label: 'Gordura',
    description: 'Percentual de gordura corporal',
    placeholder: '00%',
    value: '',
    mask: '99',
    type: 'text',
    isRequired: false,
    validate: 'numberHigherThanZero'
  },
  {
    name: 'visceralFat',
    label: 'Visceral',
    description: 'Nivel de gordura visceral',
    placeholder: '0',
    value: '',
    mask: '9',
    type: 'text',
    isRequired: false,
    validate: 'numberHigherThanZero'
  },
  {
    name: 'muscleMassPercentage',
    label: 'Massa magra',
    description: 'Percentual de massa magra',
    placeholder: '00%',
    value: '',
    mask: '99',
    type: 'text',
    isRequired: false,
    validate: 'numberHigherThanZero'
  },
  {
    name: 'basalMetabolicRate',
    label: 'Metabolismo basal em Kcal',
    description: 'em Kcal',
    placeholder: '0000kcal',
    value: '',
    mask: '9999',
    type: 'text',
    isRequired: false,
    validate: 'numberHigherThanZero'
  },
  {
    name: 'metabolicAge',
    label: 'Idade metabólica',
    placeholder: '00 anos',
    value: '',
    mask: '99',
    type: 'text',
    isRequired: false,
    validate: 'numberHigherThanZero'
  },
]