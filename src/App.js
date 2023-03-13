
import './App.css';
import { useEffect, useState } from 'react';
import  axios from 'axios'

function App() {
  const [pokeman,setPokeman]=useState("berry")
  const [data,setData]=useState([])

  // deboucing ka concept pata hai ..??pta to tha bhul gye


  const handleClick=(e)=>{
    setPokeman(e.target.value)
    console.log("hello world")
  }

  useEffect(()=>{
    axios.get(`https://pokeapi.co/api/v2/${pokeman}`).then((res)=>setData(res.data.results))

  },[pokeman])
  return (
    <>
    <div >
      <input type="text" placeholder='search your cartoon' value={pokeman} onInput={handleClick}/>
      
        {
          !data ? <>
          
          no data

          </> : 
        data.map(el=>
    
        <div key={el.id}>
          <img src={el.url}/>
          <h1 >{el.name}</h1></div>

      
        )} 

      </div>
    
      
      
    </>
  );
}

export default App;
