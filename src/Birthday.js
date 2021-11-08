import React from 'react'
import {useState,useEffect} from "react"
import data from "./Data.js"
import People from "./component/Birthdaylist"
import "./App.css"



const Birthday = () => {

  const [people,setPeople]=useState(data);
  const [showBirthday,setBirthday]=useState(true);
  
  return (
    <div className="container">
      <h1> {people.length} birthdays today</h1>
      <People people={people}/>
      {showBirthday ? 
      <button className="btn" onClick={()=>
        {
        setPeople([])
        setBirthday(false)
        }
    }>Clear all</button> : 
    <button className="btn" onClick={()=>
      {
      setPeople(data)
      setBirthday(true)
      }
    }>Reset</button>}
      
    </div>
  )
}

export default Birthday

