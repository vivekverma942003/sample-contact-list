import React from 'react'
import { useState } from 'react';
const Contactcard = (props) => {
    const [showAge,setShowAge]= useState(false);
  return (
    <div className="contact-card">
      
      <img src={props.avatarUrl}/>     
      <div className='contact-details'>
        <p>Name : {props.name}</p>
        <p>E-mail: {props.email}</p>
        <button onClick={()=>setShowAge(!showAge)}>Show Age</button>
        {showAge && <p>Age : {props.age}</p>}
      </div>
    </div>
  )
}

export default Contactcard;