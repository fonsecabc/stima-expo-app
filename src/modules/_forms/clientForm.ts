import { Sex } from '../../types/enums'
import { input } from '../../types/entities'

export const clientForm: input[] = [
  {
    name: 'name',
    label: 'Nome',
    placeholder: '',
    value: '',
    type: 'text',
    isRequired: true,
  },
  {
    name: 'email',
    label: 'Email',
    placeholder: '',
    value: '',
    type: 'text',
    isRequired: false,
    validate: 'email'
  },
  {
    name: 'phone',
    label: 'Whatsapp',
    placeholder: '(00) 00000-0000',
    value: '',
    mask: '(99) 99999-9999',
    type: 'text',
    isRequired: true,
    validate: 'phone',
  },
  {
    name: 'dateOfBirth',
    label: 'Data de nascimento',
    placeholder: 'dd/mm/yyyy',
    value: '',
    mask: '99/99/9999',
    type: 'text',
    isRequired: true,
    validate: 'dateOfBirth'
  },
  {
    name: 'sex',
    label: 'Sexo',
    placeholder: 'Selecione o sexo',
    value: '',
    isRequired: true,
    items: [
      { key: 'Feminino', value: Sex.FEMALE },
      { key: 'Masculino', value: Sex.MALE }
    ],
    type: 'select',
  },
  {
    name: 'weight',
    label: 'Peso',
    placeholder: '00kg',
    mask: '999',
    value: '',
    type: 'text',
    isRequired: true,
    validate: 'numberHigherThanZero'
  },
  {
    name: 'height',
    label: 'Altura',
    placeholder: '000cm',
    mask: '999',
    value: '',
    type: 'text',
    isRequired: true,
    validate: 'numberHigherThanZero'
  },
]
