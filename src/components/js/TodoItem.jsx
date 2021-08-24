import { useState } from "react"
import c from '../css/TodoItem.module.css'

const TodoItem = props => {

    const [isDone, setIsDone] = useState(props.todo.isDone)

    return (
        <div className={c.TodoItem}>
            <p>{props.todo.text}</p>
            <input type="checkbox" defaultChecked={isDone} onChange={() => setIsDone(!isDone)}/>
        </div>
    )
    
}

export default TodoItem;