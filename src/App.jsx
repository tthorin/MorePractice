import { useState } from 'react';
import './App.css'
import StyledInput from './components/StyledInput'
import Spoiler from './components/Spoiler'
import Switch from './components/Switch'
import TicketManager from './components/TicketManager';
import Book from './components/Book'

function App() {
	const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode && "dark"}>
      <h1>More practice</h1>
	  <Book/>
	  <TicketManager/>
      <StyledInput label="My Label"/>
	  <StyledInput label="First name"/>
	  <StyledInput label="Last name"/>
	  <Spoiler text="This is a spoiler"/>
	  <Switch label="Dark mode" action={setDarkMode} value={darkMode}/>
	  <Switch label="Item 2"/>
	  <Switch label="Item 3"/>
    </div>
  )
}

export default App
