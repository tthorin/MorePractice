import { useState } from 'react';
import "./emoji-checkbox.css";

const EmojiCheckbox = ({icons,currentIcon,nextIcon}) => {
	return (
		<div>
			<span className="emoji-checkbox" onClick={nextIcon} role="img" aria-label='emoji'>{icons[currentIcon]}</span>
		</div>
	)
}

export default EmojiCheckbox;