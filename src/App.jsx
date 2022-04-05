import { useState,useEffect } from 'react';
import './App.css'
import StyledInput from './components/StyledInput'
import Spoiler from './components/Spoiler'
import Switch from './components/Switch'
import TicketManager from './components/TicketManager';
import Book from './components/Book'
import EmojiCheckbox from './components/EmojiCheckbox';
import TodoList from './components/TodoList';

function App() {
	const [darkMode, setDarkMode] = useState(false);
	const [icons, setIcons] = useState(['✅','❌','💀','🛌']);
	const [currentIcon,setCurrentIcon] = useState(0);

	const nextIcon = () => {
		setCurrentIcon(currentIcon+1===icons.length?0:currentIcon+1);
	}

	useEffect(()=>{
		let body = document.querySelector('body');
		body.classList.toggle("dark",darkMode);
	},[darkMode]);

  return (
    <div className="App">
      <h1>More practice</h1>
	  <TodoList/>
	  <EmojiCheckbox icons={icons} currentIcon={currentIcon} nextIcon={nextIcon}/>
	  <Switch label="Dark mode" action={setDarkMode} value={darkMode}/>
	  <Switch label="Item 2"/>
	  <Switch label="Item 3"/>
	  <Book/>
	  <TicketManager/>
      <StyledInput label="My Label"/>
	  <StyledInput label="First name"/>
	  <StyledInput label="Last name"/>
	  <Spoiler text="This is a spoiler"/>
    </div>
  )
}

export default App
