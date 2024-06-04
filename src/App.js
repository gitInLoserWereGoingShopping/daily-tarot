import React from 'react';
import './App.css';

//hooks
import useMouseMovement from './hooks/useMouseMovement';
import useChaseTail from './hooks/useChaseTail';

//components
import DaySelector from './components/DaySelector';
import TarotCard from './components/TarotCard';

import getDailyTarotReadings from './data';

function App() {
  const mousePosition = useMouseMovement();
  const tailLengthInPixels = 100; //array of previous mouse positions
  const tailStepSize = 50; //pixel offset to add new gigi
  const { tail: mouseToTailPositions } = useChaseTail(mousePosition, tailLengthInPixels);
  const [isGigiChasingTail, setIsGigiChasingTail] = React.useState(true);
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

  //create Gigi solitaire cat-mouse trail
  React.useEffect(() => {
    if (!isGigiChasingTail) return;
    const AppHTMLNode = document.getElementById('App');
    for (let i = 0; i < mouseToTailPositions.length; i++) {
      if (i % tailStepSize === 0) {
        const currentPositionInTail = mouseToTailPositions[i];
        const anotherGiGi = document.createElement('img');
        const uniqueId = `Gigi${currentPositionInTail.x}${currentPositionInTail.y}${Math.random()}`;
        anotherGiGi.id = uniqueId;
        anotherGiGi.className = 'Gigi';
        anotherGiGi.src = './gigi.png';
        anotherGiGi.alt = 'gigi the cat';
        anotherGiGi.style.width = `${tailStepSize + i}px`;
        anotherGiGi.style.height = `${tailStepSize + i}px`;
        anotherGiGi.style.left = `${currentPositionInTail.x + 11 || 0}px`; 
        anotherGiGi.style.top = `${currentPositionInTail.y || 0}px`;
        AppHTMLNode.parentNode.appendChild(anotherGiGi);
        setTimeout(() => {
          const GigiToRemove = document.getElementById(uniqueId);
          GigiToRemove.remove();
        }, 1500);
      }
    }

  }, [mouseToTailPositions, isGigiChasingTail]);

  //initial data fetch on component mount
  React.useEffect(() => {
    const newDailyTarotSpread = getDailyTarotReadings(daySelected);
    setDailySpread(newDailyTarotSpread);
  }, [daySelected]);

  return (
    <div className='App' id='App'>
      <button
        onClick={() => setIsGigiChasingTail(!isGigiChasingTail)}
        style={{ backgroundColor: isGigiChasingTail ? 'red' : 'green' }}
        >
          {isGigiChasingTail ? 'Stop Gigi' : 'Start Gigi'}
      </button>
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
