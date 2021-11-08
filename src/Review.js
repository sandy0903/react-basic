import React ,{useState} from 'react'
import people from "./Data"
import "./App.css"
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
    const [index,setIndex]=useState(0);
    const {name,job,image,text,id}=people[index];
    const prePerson=()=>{
        const newIndex=index - 1;
        setIndex(checkNum(newIndex))
    }
    const nextPerson=()=>{
        const newIndex=index + 1;
        setIndex(checkNum(newIndex))

    }
    const checkNum=(num)=>{
        if(num > people.length-1){
            num=0
            return num
        }else if(num<0){
            num=people.length-1
            return num
            
        }
        return num;
    }

    const randomPerson=()=>{
        let randomNumber=Math.floor(Math.random() * people.length);
        if(randomNumber===index){
            randomNumber=index+1;

    }
    setIndex(checkNum(randomNumber))
}
    return (
        <div className="review">
            <div className="img-container">
                <img src={image} alt={name} className="person-img"/>
            </div>
            <div className="review-txt">
                <h4>{name}</h4>
                <h2>{job}</h2>
                <p>{text}</p>
            
            </div>
            <div className="btn-container">
                <button onClick={prePerson}> <FaChevronLeft/></button>
                <button onClick={nextPerson}> <FaChevronRight/></button>
                
            </div>
            <button className="btn" onClick={randomPerson}>Suprise Me</button>
                
        </div>
    )
}

export default Review
