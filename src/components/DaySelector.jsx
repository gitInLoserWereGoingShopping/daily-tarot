import React from "react";

const convertDateFormat = (inputStr) => {
    const newStringArr = [];
    const convertedStringInputToArray = Array.from(inputStr);
    convertedStringInputToArray.forEach(char => {
        if (char !== '-') {
            newStringArr.push(char);
        }
    });
    const newStringFinalForm = newStringArr.join('');
    return newStringFinalForm;
};

function DaySelector({ setDaySelected }) {
    const handleChange = (e) => { 
        const dateInputString = e.target.value; //'YYYY-MM-DD'
        //converts into 'YYYYMMDD' format
        const dateReformat = convertDateFormat(dateInputString);
        setDaySelected(dateReformat);
    };
    return (
        <input type="date" onChange={handleChange}></input>
    )
};

export default DaySelector;
