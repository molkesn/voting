import React from 'react';
import { useLocation } from 'react-router-dom';

const Result = () => {
  const location = useLocation();
  const age = location.state.age;
  const name = location.state.name;
  const isEligible = age > 18;

  return (
    <div>
      <h1>Result</h1>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      {isEligible ? <p>You are eligible to vote</p> : <p>You are not eligible to vote</p>}
    </div>
  );
};
export default Result;
