import './App.css';
import React from 'react';
import { TodoProvider } from './context/TodoContext'
import AppUI from './UI/AppUI';

function App() {
  return (
    <>
    <TodoProvider>
      <AppUI />         
    </TodoProvider>
    </>
  );
}

export default App;
