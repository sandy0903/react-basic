import React from 'react'
import TourItem from './TourItem';

const Tourslist = ({tours,deleteTour}) => {
    return (
        <div className="tours">
            {tours.map(tour=> <TourItem key={tour.id} {...tour}  deleteTour={deleteTour}/>)}
           
        </div>
    )
}

export default Tourslist
