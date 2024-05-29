import React from 'react';
import './App.css';

//hooks
import useMouseMovement from './hooks/useMouseMovement';

//components
import DaySelector from './components/DaySelector';
import TarotCard from './components/TarotCard';

import getDailyTarotReadings from './data';

function App() {
  const mousePosition = useMouseMovement();
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

  //move Gigi along with cursor
  React.useEffect(() => {
    const Gigi = document.getElementById('Gigi');
    Gigi.style.left = `${mousePosition.x + 11 || 0}px`; 
    Gigi.style.top = `${mousePosition.y || 0}px`;
  }, [mousePosition]);

  return (
    <div className='App'>
      <img id='Gigi' src='./gigi.png' alt='gigi the cat'></img>
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
