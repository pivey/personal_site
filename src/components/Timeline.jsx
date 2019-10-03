import React, { useState, useEffect, useCallback } from 'react';
import moment from 'moment';
import styled from 'styled-components';

const MonthButton = styled.div`
  width: 50px;
  height: auto;
  border: 2px solid red;
  background: pink;
`;
const YearButton = styled.div`
  width: 50px;
  height: 50px;
  border: 2px solid black;
  background: blue;
  color: white;
`;
const DayButton = styled.div`
  width: 50px;
  height: 50px;
  border: 2px solid green;
  background: purple;
`;
// const MonthInput = styled.input`
//   width: 100px;
//   height: auto;
//   border: 2px solid purple;
//   background: white;
//   color: black;
//   padding: 8px;
// `;
const IncDecButton = styled.div`
  width: 100px;
  height: 50px;
  margin: 20px;
  border: 2px solid green;
  background: pink;
  color: black;
`;

export default function Timeline() {
  const [month, setMonth] = useState(0);
  const [daysInMonth, setDaysInMonth] = useState(null);
  const [days, setDays] = useState([null]);
  const [inputValue, setInputValue] = useState([null]);
  const [monthName, setmonthName] = useState([null]);

  const monthUp = useCallback(() => {
    if (month === 11) setMonth(0);
    setMonth(month + 1);
    console.log(month);
  }, []);
  const monthDown = useCallback(() => {
    if (month === 0) setMonth(11);
    setMonth(month - 1);
    console.log(month);
  }, []);

  console.log(moment.months());
  useEffect(() => {
    // setDaysInMonth(moment(month, 'YYYY-MM').daysInMonth());
    // const arr = [];
    // for (let i = 0; i < daysInMonth; i += 1) {
    //   arr.push(i + 1);
    // }
    // setDays(arr);
  }, []);

  return (
    <div>
      <br />
      {/* <MonthButton >month</MonthButton> */}
      <IncDecButton onClick={monthUp}>increment</IncDecButton>
      <IncDecButton onClick={monthDown}>decrement</IncDecButton>
      {/* <MonthInput id="userInput" onChange={e => setInputValue(parseInt(e.currentTarget.value))} /> */}
      {/* <YearButton> year </YearButton>
      <DayButton> day </DayButton> */}
      <br />
      <div> {monthName} </div>
    </div>
  );
}
