import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NewTodoForm } from './NewTodoForm'
import { ToDoList } from './TodoList'

export default function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue === null) return []

    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  function addToDo(value) {
      setTodos(currTodos => {
        return [...currTodos, {id: crypto.randomUUID(), value, }]
          }
        ) 
  }

  function deleteTodo (id) {
    setTodos(currTodos => {
      return currTodos.filter(todo => todo.id !== id)
      }
    )
  }

  return (
    <>
    <NewTodoForm onSubmit={addToDo}/>
    <h1 className='header'>Todo list</h1>
    <ToDoList todos = {todos} deleteTodo={deleteTodo}/>
    </>    
  )
}