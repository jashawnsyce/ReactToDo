import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NewTodoForm } from './NewTodoForm'

export default function App() {
  const [todos, setTodos] = useState([])

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
    <ul className='list'>
      {todos.map(todo => {
        return (
          <li key={todo.id}>
            <label>
              <input type='checkbox'/> { todo.value }
            </label>
            <button onClick={() => deleteTodo(todo.id)} className=' btn btn-danger'> Delete</button>
          </li>
              )    
            }
          )
        }  
      </ul>
    </>    
  )
}