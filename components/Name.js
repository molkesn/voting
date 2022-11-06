import React, { useEffect } from 'react';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import result from './Result';


function Name() {

  const [name,setName] = useState('');
  const [age,setAge] = useState('');
  const [submit,setSubmit] = useState(false);
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);
    console.log(name,age)
    navigate('/result',{state : {name,age}});

  };

  // useEffect(() => {
  //   if(submit){
  //     console.log("submitted")
  //   }
  // },[submit,age,name])


  return (
    <div> 
     
    <div className="name" align="center">
      <h1 className="header">Fill the form to see if you are eligible to vote :)</h1>
      <label htmlFor="namelabel">Name :</label>
      <input  
      type="text" 
      placeholder="Name"
      // value={name}
      // value={}
      // value={name=name}
      onChange={(e) => setName(e.target.value)}
      name={name}/>
    </div>
      
    <div className="age" align="center">
      <label htmlFor="agelabel">Age :</label>
      <input 
      className="inputage" 
      type="text" 
      placeholder="Age" 
      // value={age}
      onChange={(e) => setAge(e.target.value)}
      age={age}/>
      

    </div>

    <div align="center">
      <button className='button' onClick={handleSubmit}>Submit</button>
    </div>

   </div>
  );
}

export default Name;
