import { useState } from 'react';


const Visitor = ({available,setTicketsLeft}) => {
    const [hasBooking, setHasBooking] = useState(false);
    const [bookedTickets,setBookedTickets] = useState(0);

    return (
        <div className='visitor'>
            <h3>Visitor</h3>
            <p>Booked tickets: {bookedTickets}</p>
            <button disabled={available===0} onClick={()=>{setBookedTickets(bookedTickets+1);setTicketsLeft(available-1)}}>Book ticket</button>
            <button disabled={bookedTickets===0} onClick={()=>{setBookedTickets(bookedTickets-1);setTicketsLeft(available+1)}}>Cancel booking</button>
        </div>
    )
}

export default Visitor