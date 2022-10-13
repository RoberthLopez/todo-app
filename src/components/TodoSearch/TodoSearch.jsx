import React from 'react'
import './TodoSearch.css'

const TodoSearch = ({searchValue, setSearchValue}) => {

  const onSearch = (e) => {
    setSearchValue(e.target.value)
  }

  return (
    <input value={searchValue} onChange={onSearch} className='TodoSearch' placeholder='Search'/>
  )
}

export default TodoSearch