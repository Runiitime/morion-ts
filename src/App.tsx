import React, {useState} from 'react';
import { MyDate } from './components/MyDate';

const App: React.FC = () => {
  const [selected, setSelected] = useState<Date | null>(null)

  const handleChange = (date: Date | null, event: React.SyntheticEvent<any> | undefined) => {
    console.log('event', event);
    console.log('date', date);
    setSelected(date)
  }

  const getDefaultDate = () => {
    return new Date().toLocaleDateString().toString()
  }

  return (
    <div className="date-form">
      <MyDate
        dateFormat="dd.MM.yyyy" 
        placeholder="Выберите дату"
        defaultDate={''}
        label="Дата"
        disabled={false}
        invalid={false}
        handleChange={handleChange}
        selected={selected}
      />
    </div>
  );
}

export default App;
