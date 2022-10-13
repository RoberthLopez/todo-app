import React, { createContext, useState } from 'react'
import { useLocalStorage } from '../custom-hooks/useLocalStorage';

const TodoContext = createContext([])

const TodoProvider = ({children}) => {

  const {
    item: todos, 
    saveItem: saveTodos, 
    loading,
    error,
    } = useLocalStorage('TODOS_V1', []);

   const [searchValue, setSearchValue] = useState('');   
   const [openModal, setOpenModal] = useState(false)

   const completedTodos = todos.filter(e => !!e.completed).length;
   const totalTodos = todos.length;
 
   let searchedTodos= [];

   searchValue.length < 1 ? 
   searchedTodos = todos :
   searchedTodos = todos.filter((e) => {    
     return e.text.toLowerCase().includes(searchValue.toLowerCase())
    });

  const addTodo = (text) => {
    saveTodos([...todos, {text, completed: false}]);
  };

   const completeTodos = (text) => {
     let todoIndex = todos.findIndex((e)=> e.text === text);
     let newTodos = [...todos];
     newTodos[todoIndex].completed = !newTodos[todoIndex].completed
     saveTodos(newTodos);
   };

   const removeTodos = (text) => {
    let newTodos = todos.filter((e)=> e.text !== text )
    saveTodos([...newTodos])
  }
  
 

  return (
    <TodoContext.Provider value={{
      loading,
      error,
      totalTodos,
      completedTodos,
      searchValue,
      setSearchValue,
      searchedTodos,
      completeTodos,
      removeTodos,
      openModal,
      setOpenModal,
      addTodo
    }}>
      {children}
    </TodoContext.Provider>
  )
}

export { TodoContext, TodoProvider }