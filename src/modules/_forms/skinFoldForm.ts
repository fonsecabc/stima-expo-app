import { input } from '@entities'

export const skinFoldForm: input[] = [
  {
    name: 'chest',
    label: 'Tórax',
    description: 'Dobra cutânea do tórax em milímetros',
    placeholder: '0,0mm',
    value: '',
    mask: '99,9',
    type: 'text',
    isRequired: false,
    validate: 'numberHigherThanZero'
  },
  {
    name: 'midaxillary',
    label: 'Axilar Média',
    description: 'Dobra cutânea axilar média em milímetros',
    placeholder: '0,0mm',
    value: '',
    mask: '99,9',
    type: 'text',
    isRequired: false,
    validate: 'numberHigherThanZero'
  },
  {
    name: 'subscapular',
    label: 'Subescapular',
    description: 'Dobra cutânea subescapular em milímetros',
    placeholder: '0,0mm',
    value: '',
    mask: '99,9',
    type: 'text',
    isRequired: false,
    validate: 'numberHigherThanZero'
  },
  {
    name: 'biceps',
    label: 'Bíceps',
    description: 'Dobra cutânea do bíceps em milímetros',
    placeholder: '0,0mm',
    value: '',
    mask: '99,9',
    type: 'text',
    isRequired: false,
    validate: 'numberHigherThanZero'
  },
  {
    name: 'triceps',
    label: 'Tríceps',
    description: 'Dobra cutânea do tríceps em milímetros',
    placeholder: '0,0mm',
    value: '',
    mask: '99,9',
    type: 'text',
    isRequired: false,
    validate: 'numberHigherThanZero'
  },
  {
    name: 'abdominal',
    label: 'Abdominal',
    description: 'Dobra cutânea abdominal em milímetros',
    placeholder: '0,0mm',
    value: '',
    mask: '99,9',
    type: 'text',
    isRequired: false,
    validate: 'numberHigherThanZero'
  },
  {
    name: 'suprailiac',
    label: 'Supra-ilíaca',
    description: 'Dobra cutânea supra-ilíaca em milímetros',
    placeholder: '0,0mm',
    value: '',
    mask: '99,9',
    type: 'text',
    isRequired: false,
    validate: 'numberHigherThanZero'
  },
  {
    name: 'thigh',
    label: 'Coxa',
    description: 'Dobra cutânea da coxa em milímetros',
    placeholder: '0,0mm',
    value: '',
    mask: '99,9',
    type: 'text',
    isRequired: false,
    validate: 'numberHigherThanZero'
  },
  {
    name: 'calf',
    label: 'Panturrilha',
    description: 'Dobra cutânea da panturrilha em milímetros',
    placeholder: '0,0mm',
    value: '',
    mask: '99,9',
    type: 'text',
    isRequired: false,
    validate: 'numberHigherThanZero'
  },
]
