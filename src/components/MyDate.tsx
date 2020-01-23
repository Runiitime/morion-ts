import React from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { IMyDate } from '../interfaces/IMyDate';

const MyDate: React.FC<IMyDate> = ({
  dateFormat, 
  disabled, 
  defaultDate, 
  handleChange, 
  invalid, 
  placeholder, 
  label,
  selected
}) => {
  
  const onChange = (date: Date | null, event: React.SyntheticEvent<any> | undefined) => {
    handleChange(date, event)
  }

  const renderToday = () => {
    return new Date().toLocaleDateString()
  }

  return (
    <>
      <label htmlFor="date" className="date-form__label">{label}</label>
      <div className="date-form__content">
        <span className="date-form__icon"></span>
        <DatePicker 
            onChange={onChange}
            disabled={disabled}
            placeholderText={defaultDate.toString() || placeholder}
            id="date"
            dateFormat={dateFormat}
            className={`date-form__picker ${invalid ? 'invalid' : ''}`}
            selected={selected}
          />
        <p>{renderToday()}</p>
      </div>
    </>
  )
}

export {MyDate}