import Visitor from "../Visitor";
import "./ticket-manager.css";
import { useState } from 'react';


const TicketManager = () => {
    const [ticketsLeft,setTicketsLeft] = useState(10);

    return (
        <section className = "ticket-manager-container">
            <h2>Ticket Manager</h2>
            <p>Tickets left: {ticketsLeft}</p>
            <section className="visitor-container">
                <Visitor available={ticketsLeft} setTicketsLeft={setTicketsLeft}/>
                <Visitor available={ticketsLeft} setTicketsLeft={setTicketsLeft}/>
                <Visitor available={ticketsLeft} setTicketsLeft={setTicketsLeft}/>
            </section>
        </section>
    )
}

export default TicketManager;