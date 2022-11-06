import React,{useState} from "react";
import Name  from "./components/Name";
import Result  from "./components/Result";
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
//Switch replaced with Routes 
function App() {
  
  // const [data,setData] = useState('');
 
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Name/>}/>
        <Route path="/result" element={<Result/>}/>

      </Routes>
    </Router>


  );
}

export default App;
