import React, {useContext} from 'react'
import TodoCounter from '../components/TodoCounter/TodoCounter'
import TodoSearch from '../components/TodoSearch/TodoSearch'
import TodoList from '../components/TodoList/TodoList'
import TodoItem from '../components/TodoItem/TodoItem'
import CreateTodoButton from '../components/CreateTodoButton/CreateTodoButton'
import Modal from '../components/Modal/Modal'
import { TodoContext } from '../context/TodoContext'
import TodoForm from '../components/TodoForm/TodoForm'
import TodosError from '../components/TodosError/TodosError'
import TodosLoading from '../components/TodosLoading/TodosLoading'
import EmptyTodos from '../components/EmptyTodos/EmptyTodos'


const AppUI = () => {
    const {
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
        setOpenModal} = useContext(TodoContext)

  return (
    <>
        <TodoCounter total={totalTodos} completed={completedTodos}/>
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>
        <TodoList>
        {error && <TodosError error={error}/>}
        {loading && <TodosLoading />}
        {(!loading && !searchedTodos.length) && <EmptyTodos />}
        {searchedTodos.map(e=><TodoItem key={e.text} text={e.text} removeTodos={removeTodos} completeTodos={completeTodos} completed={e.completed}/>)}
        </TodoList>
        {openModal &&(<Modal>
            <TodoForm/>
        </Modal>)}

        <CreateTodoButton setOpenModal={setOpenModal}/>
    </>
  )
}

export default AppUI