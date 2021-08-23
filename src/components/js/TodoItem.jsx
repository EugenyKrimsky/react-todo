import { useState } from "react"
import c from '../css/TodoItem.css'

const TodoItem = props => {

    return (
        <div className="TodoItem">
            <input type="checkbox"/>
            <p>{props.todo.text}</p>
        </div>
    )
    
}

export default TodoItem;