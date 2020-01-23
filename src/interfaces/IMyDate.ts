import React from 'react'

export interface IMyDate {
  dateFormat: string,
  placeholder: string,
  defaultDate: string,
  label?: string | null
  disabled: boolean,
  invalid: boolean,
  handleChange: (date: Date | null, event: React.SyntheticEvent<any> | undefined) => void,
  selected: Date | null | undefined
}