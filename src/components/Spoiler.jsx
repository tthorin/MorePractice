import { useState } from 'react';

const Spoiler = ({text}) =>{
	const [reveal,setReveal] = useState(false);
	return(
		<div className="spoiler-container">
			{reveal?<p>{text}</p>:<button onClick={()=>setReveal(true)}>SPOILER WARNING!</button>}
		</div>
	)
}
export default Spoiler;