import React, { useEffect, useState } from 'react'
import s from '../../../../css/modules/todo-list/todo/TodoItem.module.css'

const TodoItem = (props) => {
    const [todo, setTodo] = useState({
        id: props.todo.id,
        text: props.todo.text,
        complited: props.todo.complited,
    });

    const className = todo.complited ? s.complited : s.uncomplited
        
    const onClickCheckBox = () => {
        setTodo(todo => ({
            ...todo,
            complited: !todo.complited
        }))
    }

    const onDeleteTodoItem = () => {
        props.dispatch('delete', todo);
    }

    return (
        <div className={s.TodoItem}>
            <div>
                <input type="checkbox" onChange={onClickCheckBox} name="complited" checked={todo.complited}/>
                <label htmlFor="complited" className={className}>{props.todo.text}</label>
            </div>
            <input type="button" value="X" onClick={onDeleteTodoItem}/>
        </div>
    )
}

export default TodoItem