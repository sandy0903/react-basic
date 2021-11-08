import React, {useState} from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Accordionlist = ({list}) => {
    const [showText,setText]=useState(true);
    return (
        <div >
           
            <div className="item" key={list.id}>
                <div className="flex-container">
                        <h3>{list.title}</h3>
                        <button onClick={()=>setText(!showText)}>
                            {showText ? <AiOutlineMinus/> : <AiOutlinePlus/>}
                        </button>
                </div>
                    
                    { showText && <p>{list.info}</p>}
            </div>
            
        </div>
    )
}

export default Accordionlist
