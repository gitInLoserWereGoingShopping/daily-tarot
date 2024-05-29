/* pseudo data structure
type Card = {
    name: String,
    meaning: String,
}

type Cards = [Card]

type YYYYMMDD = {
    cards: [Card],
    spreadInterpretation: String,
}
*/

//YYYYMMDD
const dailyTarotSpreads = {
    YYYYMMDD: {
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
    },
    20240521: {
        cards: [{
            name: 'Temperance',
            meaning: 'Balance, moderation, and harmony are key',
        },{
            name: 'Strength',
            meaning: 'Inner strength, courage, and compassion will guide you',
        },{
            name: 'Two of Pentacles',
            meaning: 'Juggling responsibilities and adapting to change',
        }],
        spreadInterpretation: 'This reading suggests a need for balance and adaptability in your life. Rely on your inner strength and compassion to navigate challenges and find harmony.',
    },
    20240524: {
        cards: [{
            name: 'Strength',
            meaning: 'Inner power, courage, and compassion',
        },{
            name: 'Queen of Swords',
            meaning: 'Intellectual clarity, sharp communication',
        },{
            name: 'Ten of Pentacles',
            meaning: 'Family, legacy, financial security',
        }],
        spreadInterpretation: 'This trio suggests a strong, compassionate individual who excels in communication and enjoys a stable, secure life',
    },
    20240529: {
        cards: [{
            name: 'Four of Swords',
            meaning: 'rest, recuperation, and contemplation are needed',
        },{
            name: 'Queen of Wands',
            meaning: 'Passionate, creative, and inspiring energy',
        },{
            name: 'Ace of Swords',
            meaning: 'New ideas, mental clarity, and a breakthrough',
        }],
        spreadInterpretation: 'This reading suggests a period of rest and reflection is necessary before pursuing new ideas and creative endeavors with passion and clarity',
    20240525: {
        cards: [{
            name: 'Queen of Wands',
            meaning: 'Passionate, creative, inspiring leader',
        },{
            name: 'Five of Wands',
            meaning: 'Conflict, competition, differing opinions',
        },{
            name: 'The Hanged Man',
            meaning: 'Sacrifice, new perspectives, letting go',
        }],
        spreadInterpretation: 'Overall this combination suggests a passionate individual facing challenges and conflicts. Embrace new perspectives and let go of old ways to find a path forward',
    },
}

const getDailyTarotSpread = (YYYYMMDD) => {
    return dailyTarotSpreads[YYYYMMDD || 'YYYYMMDD'];
};

export default getDailyTarotSpread;
