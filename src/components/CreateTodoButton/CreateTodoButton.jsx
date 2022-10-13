import React from 'react'
import './CreateTodoButton.css'

const CreateTodoButton = ({setOpenModal}) => {
  const clickHandler = () => {
    setOpenModal(e => !e)
  }

  return (
    <button onClick={clickHandler} className='CreateTodoButton'>+</button>
  )
}

export default CreateTodoButton