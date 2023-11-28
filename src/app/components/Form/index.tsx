import { input } from '@entities'
import * as validations from '@validations'
import { Title } from '@components/Form/styles'
import { CustomTextInput, CustomSelectInput, Button, MultiSelectInput } from '@components'

import React, { useEffect, useState } from 'react'
import { Formik, Field } from 'formik'
import { KeyboardAvoidingView, View } from 'react-native'

type FormProps = {
  title: string
  inputs: Array<input>
  submitAction: (params: any) => Promise<void> | void
  goBack?: () => void
  isMultipage?: boolean
  canGoBack?: boolean
  buttonText: string
  isLoading: boolean
  values: any
}

export const Form = (props: FormProps) => {
  const { title, inputs, submitAction, isLoading, buttonText, values, isMultipage, canGoBack, goBack } = props
  
  const [formValues, setFormValues] = useState(values)

  useEffect(() => {
    setFormValues(values)
  }, [values])

  const initialValues = inputs.reduce(
    (values, input) => ({ ...values, [input.name]: formValues[input.name] ?? input.value }),
    {}
  ) 

  return (
    <KeyboardAvoidingView
      behavior='padding'
    >
      <Title>{title}</Title>
      <Formik
        initialValues={initialValues}
        onSubmit={submitAction}
      >
        {({ handleSubmit }) => (
          <>
            {inputs.map((input) => (
              <Field
                name={input.name}
                key={input.name}
                validate={
                  (value: any) => (input.validate && !input.isRequired && !value) ? undefined 
                    : input.validate === 'email' ? validations.checkEmail(value)
                      : input.validate === 'phone' ? validations.checkPhone(value)
                        : input.validate === 'dateOfBirth' ? validations.checkDateOfBirth(value)
                          : input.validate === 'passwordInvalid' ? validations.checkPasswordInvalid(value)
                            : input.validate === 'passwordLevel' ? validations.checkPasswordLevel(value)
                              : input.validate === 'numberHigherThanZero' ? validations.checkNumberHigherThanZero(value)
                                : input.isRequired ? validations.checkValue(value)
                                  : undefined
                }
              >{({ field, form }: { field: any, form: any }) => {
                  const showError = form.touched[input.name] && form.errors[input.name]

                  return input.type === 'text' ? (
                    <CustomTextInput
                      label={input.label}
                      setValue={(value: any) => field.onChange(input.name)(value)}
                      value={field.value}
                      isSecured={input.isSecured}
                      placeholder={input.placeholder}
                      mask={input.mask}
                      error={showError ? form.errors[input.name] : undefined}
                      description={input.description}
                    />
                  ) 
                    : input.type === 'select' ? (
                      <CustomSelectInput
                        label={input.label}
                        items={input.items ?? []}
                        setValue={(value: any) => field.onChange(input.name)(value)}
                        value={field.value}
                        placeholder={input.placeholder ?? ''}
                        error={showError ? form.errors[input.name] : undefined}
                        description={input.description}
                      />
                    ) 
                      : input.type === 'multiSelect' ? (
                        <MultiSelectInput 
                          label={input.label}
                          items={input.items ?? []}
                          setValue={(value: any) => field.onChange(input.name)(value)}
                          value={field.value}
                          placeholder={input.placeholder ?? ''}
                          error={showError ? form.errors[input.name] : undefined}
                          description={input.description}
                        />
                      ) 
                        : null
                }}
              </Field>
            ))}
            { !isMultipage ? (
              <Button
                style={{ marginTop: 25, marginBottom: 40 }}
                action={handleSubmit}
                text={buttonText}
                isDisabled={isLoading}
                isLoading={isLoading}
                type='default'
              />
            ) : (
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 25, marginBottom: 40 }}>
                { canGoBack && <Button
                  action={goBack}
                  text={'Voltar'}
                  type='outline'
                />}
                <Button
                  action={handleSubmit}
                  text={'Próximo'}
                  type='default'
                  style={{ marginLeft: 'auto' }}
                />
              </View>
            )

            }

          </>
        )}
      </Formik>
    </KeyboardAvoidingView>
  )
}
