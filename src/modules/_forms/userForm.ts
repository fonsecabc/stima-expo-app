import { input } from '@entities'

export const userForm: input[] = [
  {
    name: 'email',
    label: 'Email',
    placeholder: 'Digite seu email',
    value: '',
    type: 'text',
    isRequired: true,
    validate: 'email'
  },
  {
    name: 'password',
    label: 'Senha',
    placeholder: 'Digite sua senha',
    value: '',
    type: 'text',
    isRequired: true,
    isSecured: true,
    validate: 'password'
  }
]