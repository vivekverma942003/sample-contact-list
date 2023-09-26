import { useEffect,useState } from 'react';
import './App.css';
import Contactcard from './contact-card';

function App() {
const [results,setResults]=useState([])

useEffect(()=>{
  fetch("https://randomuser.me/api/?results=50")
  .then(response=>response.json())
  .then(data=>{
    setResults(data.results)
    console.log(data)
  })
},[])

  
  return (
    <div className='App'>
      {results.map((results,index)=>{
        return(
          <Contactcard key={index}
          avatarUrl={results.picture.medium}
          name={results.name.first}
          email={results.email}
          age = {results.dob.age}/>
        )
      })}
    </div>
  );
}

export default App;
