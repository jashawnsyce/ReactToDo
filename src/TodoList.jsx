import { useState } from "react"
import { ToDoItem } from "./TodoItem"

export function ToDoList({todos, deleteTodo}) {
    return <ul className='list'>
      {todos.map(todo => {
        return (
          <ToDoItem id = {todo.id} value = {todo.value } key = {todo.id} deleteTodo={deleteTodo}/>
              )    
            }
          )
        }  
      </ul>
}