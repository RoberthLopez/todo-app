import React from 'react'
import './TodosLoading.css'
import { RiDeleteBinLine, RiCheckboxBlankFill } from "react-icons/ri";

const TodosLoading = () => {
  return (
    <>
        <div className='loading__container'>
            <span className='loading__completeIcon icon'><RiCheckboxBlankFill /></span>
            <p className='loading__text'></p>
            <span className='loading__deleteIcon icon'><RiDeleteBinLine /></span>
        </div>
        <div className='loading__container'>
            <span className='loading__completeIcon icon'><RiCheckboxBlankFill /></span>
            <p className='loading__text'></p>
            <span className='loading__deleteIcon icon'><RiDeleteBinLine /></span>
        </div>
        <div className='loading__container'>
            <span className='loading__completeIcon icon'><RiCheckboxBlankFill /></span>
            <p className='loading__text'></p>
            <span className='loading__deleteIcon icon'><RiDeleteBinLine /></span>
        </div>
        <div className='loading__container'>
            <span className='loading__completeIcon icon'><RiCheckboxBlankFill /></span>
            <p className='loading__text'></p>
            <span className='loading__deleteIcon icon'><RiDeleteBinLine /></span>
        </div>
        
    </>
  )
}

export default TodosLoading