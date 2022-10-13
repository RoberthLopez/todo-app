import React from 'react'
import './TodoCounter.css';

const TodoCounter = ({total, completed}) => {
  return (
    <h2 className='TodoCounter'>You have completed <span className='task'>{completed}</span> of <span className='task'>{total}</span> task</h2>
  )
}

export default TodoCounter