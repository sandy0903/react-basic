import React,{useState, useEffect} from 'react'
import "./App.css"
import Tourslist from "./component/Tourslist"
const url="https://course-api.com/react-tours-project"
const Tours = () => {
    const [loading,setLoading]=useState(true)
    const [tours,setTours]=useState([])

    const fetchTours=async ()=>{
        setLoading(true)
        const res= await fetch(url)
        const data=await res.json()
        setTours(data)
        setLoading(false)
    }
    
    useEffect(()=>{
        fetchTours();
    },
    [])
    const deleteTour=(id)=>{
        setTours(tours.filter(tour=>tour.id!==id))
    }

    
    return (
        <div>
            {loading ? <h1 className="load">LOADING....</h1> : 
            <div>
            <div className="container">
                <h1>Our Tours </h1>
                <div className="line"></div>
            </div>
            <Tourslist tours={tours} deleteTour={deleteTour}/>
            </div>}
        </div>
        
        
    )
}

export default Tours
