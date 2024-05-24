import React from "react";
import './TarotCard.css';

function TarotCard({ card }) {
    const { name, meaning } = card;
    return (
        <div className='tarotCard'>
            <div className='tarotCardTitle'>{name}</div>
            <meaning className='tarotCardMeaning'>{meaning}</meaning>
        </div>
    )
};

export default TarotCard;
