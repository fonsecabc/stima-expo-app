import { Question, Label, Description, Answer, AnswerContainer, Title, Container } from '@components/NutricionistForm/styles'

import React from 'react'

type NutricionistForm = {
  title: string
  nutritionistForm: Array<{
    label: string
    description: string
    answer: string
  }>
}

export const NutricionistForm = (props: NutricionistForm) => {
  const { title, nutritionistForm } = props

  return (
    <>
      <Title>{title}</Title>
      <Container>
        {
          nutritionistForm.map((question) => {
            return (
              <Question>
                <Label>{question.label}</Label>
                {question.description && <Description>{question.description}</Description>}
                <AnswerContainer>
                  <Answer>{question.answer}</Answer>
                </AnswerContainer>
              </Question>
            )
          })
        }
      </Container>
    </>
  )
  
}
