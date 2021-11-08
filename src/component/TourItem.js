import React,{useState} from 'react'

const TourItem = ({ id, image, info, name, price,deleteTour}) => {
    const [readMore,setReadMore]= useState(false)
    
    return (
        <div className="card" key={id}>
           <img src={image} alt={name} />
           <div className="card-txt">
                <div>
                        <h3>{name}</h3>
                        <h3>${price}</h3>
                </div>
                <p>{readMore ? info :`${info.substring(0,200)}...`}</p>
                    <button onClick={() => setReadMore(!readMore)}>
                       
                        {readMore ? 'show less' : '  read more'}
                    </button>
                    
           </div>
           <button className="btn" onClick={()=>deleteTour(id)}>Not interest</button>
        </div>
    )
}

export default TourItem
