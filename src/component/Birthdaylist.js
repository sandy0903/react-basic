import React from 'react'

const People = ({people}) => {
    return (
        <div>
            {people.map(person=>
               <div className="user">
                    <img src={person.image} alt={person.name}/>
                    <div className="user-text"> 
                        <h3>{person.name}</h3>
                        <p>{person.age}</p>
                    </div>
                        

               </div>
            )}
        </div>
    )
}

export default People
