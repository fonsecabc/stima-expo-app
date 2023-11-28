import { input } from '@entities'
import { PaymentMethod } from '@enums'

const currentYear = new Date().getFullYear()

export const cardForm: input[] = [
  {
    name: 'paymentMethod',
    label: 'Tipo de cartão',
    value: '',
    type: 'select',
    isRequired: true,
    items: [
      { key: 'Cartão de crédito', value: PaymentMethod.CREDIT_CARD },
      { key: 'Cartão de débito', value: PaymentMethod.DEBIT_CARD },
    ]
  },
  {
    name: 'number',
    label: 'Número do cartão',
    placeholder: '0000 0000 0000 0000',
    value: '',
    type: 'text',
    mask: '9999 9999 9999 9999',
    isRequired: true,
    validate: 'cardNumber'
  },
  {
    name: 'holderName',
    label: 'Nome no cartão',
    placeholder: 'Seu nome',
    value: '',
    type: 'text',
    isRequired: true
  },
  {
    name: 'expirationMonth',
    label: 'Mês de expiração',
    value: '',
    type: 'select',
    isRequired: true,
    items: [
      { key: 'Janeiro', value: 1 },
      { key: 'Fevereiro', value: 2 },
      { key: 'Março', value: 3 },
      { key: 'Abril', value: 4 },
      { key: 'Maio', value: 5 },
      { key: 'Junho', value: 6 },
      { key: 'Julho', value: 7 },
      { key: 'Agosto', value: 8 },
      { key: 'Setembro', value: 9 },
      { key: 'Outubro', value: 10 },
      { key: 'Novembro', value: 11 },
      { key: 'Dezembro', value: 12 },
    ]
  },
  {
    name: 'expirationYear',
    label: 'Ano de expiração',
    value: '',
    mask: '99',
    type: 'select',
    isRequired: true,
    items: Array.from({ length: 30 }, (_, i) => ({
      key: (currentYear + i).toString(),
      value: currentYear + i
    }))
  },
  {
    name: 'cvv',
    label: 'Código CVV',
    placeholder: 'CVV',
    value: '',
    isRequired: true,
    type: 'text',
    mask: '999'
  }
]
