import React , {useState} from 'react'
import data from "./accordionData"
import Accordionlist from "./component/Accordionlist"
import "./App.css"
const Accordion = () => {
    const [list,setList]= useState(data)
    

    
    return (
        <> 
            {data.map(list=>
                <Accordionlist list={list} />
            )}
            
        </>
    )
}

export default Accordion
