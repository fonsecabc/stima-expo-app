import { input } from '../../types/entities'

export const resetPasswordForm: input[] = [
  {
    name: 'email',
    label: 'Email',
    placeholder: 'Digite seu email',
    value: '',
    type: 'text',
    isRequired: true,
    validate: 'email'
  }
]