import React from 'react';
import './App.css';

//components
import DaySelector from './components/DaySelector';
import TarotCard from './components/TarotCard';

import getDailyTarotReadings from './data';

function App() {
  const [daySelected, setDaySelected] = React.useState('YYYYMMDD');
  const [dailySpread, setDailySpread] = React.useState(getDailyTarotReadings(daySelected) || {
    cards: [{
        name: '',
        meaning: '',
    },{
        name: '',
        meaning: '',
    },{
        name: '',
        meaning: '',
    }],
    spreadInterpretation: '',
});

  //initial data fetch on component mount
  React.useEffect(() => {
    const newDailyTarotSpread = getDailyTarotReadings(daySelected);
    setDailySpread(newDailyTarotSpread);
  }, [daySelected]);

  console.log(dailySpread);
  console.log('day selected to be used for fetching tarot daily spread data:\n', daySelected);
  return (
    <div className="App">
      <DaySelector setDaySelected={setDaySelected}/>
      <div className='spreadInterpretation'>{typeof dailySpread?.spreadInterpretation === 'string'
        ? <div>{dailySpread.spreadInterpretation}</div>
        : null
      }</div>
      {dailySpread?.cards.length
        ? <div className='tarotCardGroup'>{dailySpread.cards.map((card, cardIndex) => <TarotCard key={`card_${cardIndex}`} card={card}/>)}</div>
        : null
      }
    </div>
  );
}

export default App;
