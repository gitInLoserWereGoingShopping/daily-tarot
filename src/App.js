import React from 'react';
import './App.css';
import DaySelector from './components/DaySelector';

function App() {
  const [daySelected, setDaySelected] = React.useState('YYYYMMDD');
  console.log('day selected to be used for fetching tarot daily spread data:\n', daySelected);
  return (
    <div className="App">
      <DaySelector setDaySelected={setDaySelected}/>
      <div>please confirm papyrus</div>
    </div>
  );
}

export default App;
