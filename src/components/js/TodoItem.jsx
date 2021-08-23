import { useState } from "react"
import c from '../css/TodoItem.module.css'

const TodoItem = props => {

    return (
        <div className={c.TodoItem}>
            <p>{props.todo.text}</p>
            <input type="checkbox"/>
        </div>
    )
    
}

export default TodoItem;