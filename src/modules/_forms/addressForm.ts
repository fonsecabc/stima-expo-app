import { input } from '@entities'

export const addressForm: input[] = [
  {
    name: 'country',
    label: 'País',
    value: '',
    type: 'select',
    isRequired: true,
    items: [
      { key: 'Brasil', value: 'BR' },
      { key: 'Estados Unidos', value: 'US' }
    ]
  },
  {
    name: 'state',
    label: 'Estado',
    value: '',
    type: 'select',
    isRequired: true,
    items:  [
      { key: 'Acre', value: 'AC' },
      { key: 'Alagoas', value: 'AL' },
      { key: 'Amapá', value: 'AP' },
      { key: 'Amazonas', value: 'AM' },
      { key: 'Bahia', value: 'BA' },
      { key: 'Ceará', value: 'CE' },
      { key: 'Distrito Federal', value: 'DF' },
      { key: 'Espírito Santo', value: 'ES' },
      { key: 'Goiás', value: 'GO' },
      { key: 'Maranhão', value: 'MA' },
      { key: 'Mato Grosso', value: 'MT' },
      { key: 'Mato Grosso do Sul', value: 'MS' },
      { key: 'Minas Gerais', value: 'MG' },
      { key: 'Pará', value: 'PA' },
      { key: 'Paraíba', value: 'PB' },
      { key: 'Paraná', value: 'PR' },
      { key: 'Pernambuco', value: 'PE' },
      { key: 'Piauí', value: 'PI' },
      { key: 'Rio de Janeiro', value: 'RJ' },
      { key: 'Rio Grande do Norte', value: 'RN' },
      { key: 'Rio Grande do Sul', value: 'RS' },
      { key: 'Rondônia', value: 'RO' },
      { key: 'Roraima', value: 'RR' },
      { key: 'Santa Catarina', value: 'SC' },
      { key: 'São Paulo', value: 'SP' },
      { key: 'Sergipe', value: 'SE' },
      { key: 'Tocantins', value: 'TO' }

    ]
  },
  {
    name: 'city',
    label: 'Cidade',
    value: '',
    type: 'text',
    isRequired: true
  },
  {
    name: 'zipCode',
    label: 'CEP',
    placeholder: '00000-000',
    value: '',
    type: 'text',
    isRequired: true,
    mask: '99999-999'
  },
  {
    name: 'street',
    label: 'Rua',
    value: '',
    type: 'text',
    isRequired: true,
  },
  {
    name: 'streetNumber',
    label: 'Número',
    value: '',
    type: 'text',
    isRequired: true,
  },
  {
    name: 'neighborhood',
    label: 'Bairro',
    value: '',
    type: 'text',
    isRequired: true,
  },
  {
    name: 'complement',
    label: 'Complemento',
    value: '',
    placeholder: 'Ex: Andar 3, Apto 101',
    type: 'text',
    isRequired: true,
  },
]
