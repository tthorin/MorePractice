import "./switch.css";
import { useState } from 'react';

/**
 * Will use the passed in function to set the state of the switch
 * @props {string} label - The label of the switch
 * @props {function} action - The function to be called when the switch is toggled
 * @props {boolean} value - The value of the switch
 */
const Switch = ({label, action, value}) =>{
	const [active,setActive] = useState(false);

	return(
		<div className="switch-container">
		<label htmlFor="checkbox" className={active && "active"}>{label}</label>
			<input className ="switch" type="checkbox" onChange={()=>{setActive(!active); (action && action(!value))}}/>
		</div>
	)
}

export default Switch;
