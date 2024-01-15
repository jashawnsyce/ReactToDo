import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function App() {
  const [newItem, setNewItem] = useState("boobs")
  const [todos, setTodos] = useState([])
  
  function handleSubmit(e) {
    e.preventDefault()

    if (newItem !== "") {
      setTodos(currTodos => {
        return [...currTodos, {id: crypto.randomUUID(), value: newItem, }]
          }
        ) 
      setNewItem("")
      }
  }

  function deleteTodo (id) {
    setTodos(currTodos => {
      return currTodos.filter(todo => todo.id !== id)
      }
    )
  }

  return (
    <>
      <form onSubmit={handleSubmit} className='new-item-form'>
        <div className='form-row'>
          <label htmlFor='item'>New Item</label>
          <input value={ newItem } onChange={e =>setNewItem(e.target.value) } type='text' id='item'/>
        </div>
        <button className='btn'>Add</button>
      </form>

      <h1 className='header'>Todo list</h1>
      <ul className='list'>
        {todos.map(todo => {
            return <li key={todo.id}>
              <label>
                <input type='checkbox'/> { todo.value }
              </label>
              <button onClick={() => deleteTodo(todo.id)} className=' btn btn-danger'> Delete</button>
            </li>
            }
          )
        }
        
      </ul>
    </>    
  )
}