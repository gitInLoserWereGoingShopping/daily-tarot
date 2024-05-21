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
}

const getDailyTarotSpread = (YYYYMMDD) => {
    return dailyTarotSpreads[YYYYMMDD || 'YYYYMMDD'];
};

export default getDailyTarotSpread;
