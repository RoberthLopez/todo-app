import React, { useContext, useState } from 'react'
import './TodoForm.css'
import { TodoContext } from '../../context/TodoContext'
import { RiCloseFill } from "react-icons/ri";  

const TodoForm = () => {
    const {addTodo, setOpenModal} = useContext(TodoContext)
    const [newTodoValue, setNewTodoValue] = useState("");

    const onChange = (e) => {
        setNewTodoValue(e.target.value)
    }

    const onCancel = () => {
        setOpenModal(false)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        addTodo(newTodoValue)
        setOpenModal(false)
    }

  return (
    <form onSubmit={onSubmit}>
      <label>Write your new TASK</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Enter a task"
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="submit"
          className="TodoForm-button TodoForm-button--add"
        >
          Add
        </button>
      </div>
      <RiCloseFill onClick={onCancel}className='TodoForm__close'/>
    </form>
  )
}

export default TodoForm