import { input } from '@entities'

export const nutricionistForm: input[] = [
  {
    name: 'objective',
    label: 'Objetivo',
    value: '',
    isRequired: false,
    items: [
      { key: 'Emagrecimento e vitalidade', value: 'loseWeight' },
      { key: 'Ganho de massa magra', value: 'gainWeight' }
    ],
    type: 'select',
  },
  {
    name: 'urine',
    label: 'Cor da urina',
    description: 'A cor da urina mostra o que precisa mudar em alguns dos seus hábitos',
    value: '',
    isRequired: false,
    items: [
      { key: 'Branca leitosa', value: 'white' },
      { key: 'Transparente', value: 'transparent' },
      { key: 'Amarelo bem claro', value: 'lightYellow' },
      { key: 'Amarelado', value: 'yellow' },
      { key: 'Alaranjado', value: 'orange' },
      { key: 'Quase marron', value: 'brown' },
      { key: 'Avermelhado', value: 'red' },
    ],
    type: 'select',
  },
  {
    name: 'intestine',
    label: 'Intestino',
    description: 'Quantas vezes vai ao banheiro (numero 2)?',
    value: '',
    isRequired: false,
    items: [
      { key: '1 vez ao dia', value: 'onceADay' },
      { key: '2 ou mais vezes ao dia', value: 'moreThanOnceADay' },
      { key: 'Não faço todo dia', value: 'notEveryDay' },
      { key: 'As vezes demoro dias sem ir', value: 'daysWithout' },
    ],
    type: 'select',
  },
  {
    name: 'pathologies',
    label: 'Patologias',
    description: 'Selecione as doenças que você possui',
    value: '',
    isRequired: false,
    items: [
      { key: 'Hipertensão (pressão alta)', value: 'hypertension' },
      { key: 'Diabetes ou pré', value: 'diabetes' },
      { key: 'Hipotireoidismo', value: 'hypothyroidism' },
      { key: 'Hipertireoidismo', value: 'hyperthyroidism' },
      { key: 'Renal (rins)', value: 'renal' },
      { key: 'Cardíaco (coração)', value: 'cardiac' },
      { key: 'Osteoporose', value: 'osteoporosis' },
      { key: 'Gastrite', value: 'gastritis' },
      { key: 'Asma', value: 'asthma' },
      { key: 'Bronquite', value: 'bronchitis' },
      { key: 'Rinite', value: 'rhinitis' },
      { key: 'Circulatório', value: 'circulatory' },
      { key: 'Enxaqueca', value: 'migraine' }
    ],
    type: 'multiSelect',
  },
  {
    name: 'medicines',
    label: 'Medicamentos',
    description: 'Escreva os medicamentos que você toma',
    placeholder: '',
    value: '',
    type: 'text',
    isRequired: false,
  },
  {
    name: 'symptoms',
    label: 'Sintomas',
    description: 'Selecione os sintomas que você possui',
    value: '',
    isRequired: false,
    items: [
      { key: 'Ansiedade', value: 'anxiety' },
      { key: 'Irritabilidade', value: 'irritability' },
      { key: 'Depressão', value: 'depression' },
      { key: 'Fadiga', value: 'fatigue' },
      { key: 'Falta de memória e concentração', value: 'memoryConcentrationProblems' },
      { key: 'Dores no corpo', value: 'bodyAches' },
      { key: 'Problemas de pele', value: 'skinProblems' },
      { key: 'Queda de cabelo', value: 'hairLoss' },
      { key: 'Unhas fracas e quebradiças', value: 'weakNails' },
      { key: 'Má circulação', value: 'poorCirculation' },
      { key: 'Indigestão', value: 'indigestion' },
      { key: 'Refluxo', value: 'reflux' },
      { key: 'Azia', value: 'heartburn' }
    ],
    type: 'multiSelect',
  },
  {
    name: 'apetite',
    label: 'Nivel de apetite',
    value: '',
    isRequired: false,
    items: [
      { key: 'Normal', value: 'normal' },
      { key: 'Baixo', value: 'low' },
      { key: 'Alto', value: 'high' },
    ],
    type: 'select',
  },
  {
    name: 'wakeUpTime',
    label: 'Que horas acorda?',
    placeholder: '00:00',
    mask: '99:99',
    value: '',
    type: 'text',
    isRequired: false,
    validate: 'time'
  },
  {
    name: 'sleepTime',
    label: 'Que horas vai dormir?',
    placeholder: '00:00',
    mask: '99:99',
    value: '',
    type: 'text',
    isRequired: false,
    validate: 'time'
  },
  {
    name: 'foodRestrictions',
    label: 'Alimentos que não pode comer',
    description: 'Escreva os alimentos evita por algum problema de saúde',
    placeholder: '',
    value: '',
    type: 'text',
    isRequired: false,
  },
  {
    name: 'eatingHabits',
    label: 'Refeições fora de casa', 
    description: 'Selecione as refeições você faz fora de casa',
    placeholder: '',
    value: '',
    items: [
      { key: 'Café da manhã', value: 'breakfast' },
      { key: 'Lanche da manhã', value: 'morningSnack' },
      { key: 'Almoço', value: 'lunch' },
      { key: 'Lanche da tarde', value: 'afternoonSnack' },
      { key: 'Jantar', value: 'supper' },
    ],
    type: 'multiSelect',
    isRequired: false,
  },
  {
    name: 'habits',
    label: 'Hábitos',
    description: 'Selecione os hábitos que você possui',
    placeholder: '',
    value: '',
    items: [
      { key: 'Beber', value: 'drink' },
      { key: 'Fumar', value: 'smoke' },
    ],
    type: 'multiSelect',
    isRequired: false,
  },
  {
    name: 'drinkingFrequency',
    label: 'Se bebe, com qual frequência?',
    placeholder: '',
    value: '',
    items: [
      { key: 'Toda dia', value: 'everyday' },
      { key: 'Um dia sim, um dia não', value: 'onceTwoDays' },
      { key: 'Só nos fins de semana', value: 'weekends' },
      { key: 'Raramente', value: 'rarely' },
    ],
    type: 'select',
    isRequired: false,
  },
  {
    name: 'physicalActivity',
    label: 'Atividade física',
    description: 'Com qual frequencia faz atividade física?',
    placeholder: '',
    value: '',
    items: [
      { key: 'Não faço', value: 'never' },
      { key: '6 vezes na semana', value: 'everyday' },
      { key: '4 a 5 vezes na semana', value: 'weekdays' },
      { key: '2 a 3 vezes na semana', value: 'twiceAWeek' },
    ],
    type: 'select',
    isRequired: false,
  },
  {
    name: 'physicalActivityIntensity',
    label: 'Intensidade da atividade',
    description: 'Como você classifica a intensidade dessa atividade?',
    placeholder: '',
    value: '',
    items: [
      { key: 'Alta intensidade', value: 'high' },
      { key: 'Intensidade média', value: 'medium' },
      { key: 'Baixa intensidade', value: 'low' },
    ],
    type: 'select',
    isRequired: false,
  },
  {
    name: 'usualBreakfast',
    label: 'Café da manhã',
    description: 'O que costuma comer no café da manhã?',
    placeholder: '',
    value: '',
    type: 'text',
    isRequired: false,
  },
  {
    name: 'usualMorningSnack',
    label: 'Lanche da manhã',
    description: 'O que costuma comer no lanche da manhã?',
    placeholder: '',
    value: '',
    type: 'text',
    isRequired: false,
  },
  {
    name: 'usualLunch',
    label: 'Almoço',
    description: 'O que costuma comer no almoço?',
    placeholder: '',
    value: '',
    type: 'text',
    isRequired: false,
  },
  {
    name: 'usualEveningSnack',
    label: 'Lanche da tarde',
    description: 'O que costuma comer no lanche da tarde?',
    placeholder: '',
    value: '',
    type: 'text',
    isRequired: false,
  },
  {
    name: 'usualSupper',
    label: 'Jantar',
    description: 'O que costuma comer no jantar?',
    placeholder: '',
    value: '',
    type: 'text',
    isRequired: false,
  },
  {
    name: 'favoriteFoods',
    label: 'Comidas preferidas',
    description: 'Qual alimento você não abre mão?',
    placeholder: '',
    value: '',
    type: 'text',
    isRequired: false,
  },
  {
    name: 'hatedFoods',
    label: 'Comidas que não gosta',
    description: 'Qual alimento você não gosta?',
    placeholder: '',
    value: '',
    type: 'text',
    isRequired: false,
  },
  {
    name: 'suplements',
    label: 'Suplementos',
    description: 'Liste os suplementos que já usa e/ou que foram indicados pelo consultor',
    placeholder: '',
    value: '',
    type: 'text',
    isRequired: false,
  },
  {
    name: 'note',
    label: 'Observação',
    description: 'Escreva as observações que achar necessárias',
    placeholder: '',
    value: '',
    type: 'text',
    isRequired: false,
  },
]

export function getNutricionistFormValues(nutricionistFormObject: any): any {

  const result = nutricionistForm.map((input) => {
    const name = input.name
    const type = input.type
    const question = input.label
    const description = input.description

    let value = nutricionistFormObject[name]

    if (type === 'text') {
      return {
        label: question,
        description,
        answer: transformTextValues(value)
      }
    }

    if (!input.items) return

    if (type === 'select') {
      value = transformSelectValues(value, input.items)
    }

    if (type === 'multiSelect') {
      value = transformMultiSelectValues(value, input.items)
    }

    return {
      label: question,
      description,
      answer: value
    }
  })

  return Object.assign(result)
}

export function transformMultiSelectValues(value: string, itemsOfMultiSelect: Array<{ key: string, value: string }>): string {
  return value.split(',').map((item) => {
    const itemFound = itemsOfMultiSelect.find((itemOfMultiSelect) => itemOfMultiSelect.value === item)
    if (itemFound) {
      return itemFound.key
    }
    return 'Sem resposta'
  }).join(', ')
}

export function transformSelectValues(value: string, itemsOfSelect: Array<{ key: string, value: string }>): string {
  return itemsOfSelect.find((item) => item.value === value)?.key || 'Sem resposta'
}

export function transformTextValues(string: string): string {
  if (!string) return 'Sem resposta'
  return string.charAt(0).toUpperCase() + string.slice(1)
}

