import React from 'react'
import './TodoItem.css'
import { RiCheckboxFill, RiDeleteBinLine, RiCheckboxBlankFill } from "react-icons/ri";

const TodoItem = ({ text, completed, removeTodos, completeTodos }) => {

  return (
    <li className={`${completed && 'TodoItem__complete'} TodoItem`}>
      <span className='Icon Icon-check'>
        {completed ? 
        <RiCheckboxFill onClick={()=>completeTodos(text)}/> :
        <RiCheckboxBlankFill onClick={()=>completeTodos(text)}/>}
      </span>
      <p className='TodoItem-p'>
        {text}
      </p>
      <span className="Icon Icon-delete">
        <RiDeleteBinLine onClick={()=>removeTodos(text)}/>
      </span>
    </li>
  )
}

export default TodoItem