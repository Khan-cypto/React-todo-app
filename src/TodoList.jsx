import React from 'react';
// import { AiFillCloseCircle } from 'react-icons/ai';


const TodoList = (props) => {
	
	return (
	<>
	<div className="todo-style">
	{/*<div><AiFillCloseCircle /></div>*/}
	<div className="fa-times" onClick={ () => {props.onSelect(props.id);} }> X </div>	{/*callback function*/}
	<li> {props.text} </li>                     
	</div>
	</>
	)
}

export default TodoList;