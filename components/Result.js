import React from 'react'
import Name from './Name';
import { useLocation } from 'react-router-dom'


// export default function result(props) {
  
//   const location = useLocation();

//   return (
    
//     <div>
//      <h1>result </h1>
//      <p>{location.state.name}</p>
//      <p>{location.state.age}</p>
//     </div>
//   )
// }

const Result = ({props}) =>{
  const location = useLocation();
  // =a;
  let a=location.state.age;
  let n=location.state.name;
  // location.state.name=n;

  // if({location.state.age} > 18)
  // {
  //   <p>u are eligble to vote</p>
  //  }
  return (
    
    <div>
     <h1>result </h1>
     <p>{location.state.name}</p>
     <p>{location.state.age}</p>
     {/* <p>{location.state.name}</p>
     <p>{location.state.age}</p> */}
     {/* <p>{
            {a} > 18  ? <p>you are eligible to vote</p> : <p>not</p>
        } </p> */}

    </div>
  );
}

export default Result;

