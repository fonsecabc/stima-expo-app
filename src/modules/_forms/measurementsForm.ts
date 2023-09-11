import { input } from '../../types/entities'

export const measurementsForm: input[] = [
  {
    name: 'rightBicep',
    label: 'Biceps direito',
    placeholder: '00cm',
    value: '',
    mask: '99',
    type: 'text',
    isRequired: false,
    validate: 'numberHigherThanZero'
  },
  {
    name: 'leftBicep',
    label: 'Biceps esquerdo',
    placeholder: '00cm',
    value: '',
    mask: '99',
    type: 'text',
    isRequired: false,
    validate: 'numberHigherThanZero'
  },
  {
    name: 'shoulders',
    label: 'Ombros',
    placeholder: '00cm',
    value: '',
    mask: '999',
    type: 'text',
    isRequired: false,
    validate: 'numberHigherThanZero'
  },
  {
    name: 'waist',
    label: 'Cintura',
    placeholder: '00cm',
    value: '',
    mask: '99',
    type: 'text',
    isRequired: false,
    validate: 'numberHigherThanZero'
  },
  {
    name: 'hip',
    label: 'Quadril',
    placeholder: '00cm',
    value: '',
    mask: '999',
    type: 'text',
    isRequired: false,
    validate: 'numberHigherThanZero'
  },
  {
    name: 'leftThigh',
    label: 'Coxa esquerda',
    placeholder: '00cm',
    value: '',
    mask: '999',
    type: 'text',
    isRequired: false,
    validate: 'numberHigherThanZero'
  },
  {
    name: 'rightThigh',
    label: 'Coxa direita',
    placeholder: '00cm',
    value: '',
    mask: '999',
    type: 'text',
    isRequired: false,
    validate: 'numberHigherThanZero'
  },
  {
    name: 'leftCalf',
    label: 'Panturrilha esquerda',
    placeholder: '00cm',
    value: '',
    mask: '99',
    type: 'text',
    isRequired: false,
    validate: 'numberHigherThanZero'
  },
  {
    name: 'rightCalf',
    label: 'Panturrilha direita',
    placeholder: '00cm',
    value: '',
    mask: '99',
    type: 'text',
    isRequired: false,
    validate: 'numberHigherThanZero'
  },
]