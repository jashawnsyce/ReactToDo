import { useState } from "react"

export function ToDoItem({ id, value, deleteTodo}) {
    return <li >
            <label>
              <input type='checkbox'/> { value }
            </label>
            <button  onClick={() => deleteTodo(id)}  className=' btn btn-danger'> Delete</button> 
          </li>
}