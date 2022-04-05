import StyledInput from "./StyledInput";
import { useState,createRef } from 'react';
import EmojiCheckbox from "./EmojiCheckbox";
import "./todo-list.css";


const TodoList = () => {
	  const [todos, setTodos] = useState([]);
	  const [newTodo, setNewTodo] = useState("");
	  let ref = createRef();

	return(
		<section className="todo-section">
			<ul>
				{todos.map((t,idx) => <li key={idx}>{t}</li>)}
			</ul>
			<div>
				<StyledInput ref={ref} value={newTodo} setValue={setNewTodo} label="Write a new todo"/>
				<button disabled={newTodo.trim().length===0} onClick={()=>{setTodos([...todos,newTodo]);setNewTodo("");ref.current.focus()}}> Add todo</button>
			</div>
		</section>
	)
}

export default TodoList;