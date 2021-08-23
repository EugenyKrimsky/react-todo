import React, { useState } from 'react'

const NewTodoItem = ({addTodo}) => {
    
    const [todo, setTodo] = useState('');

    const onInput = value => {
        setTodo(value);
    }

    const onAddTodo = () => {
        addTodo(todo);
    }

    return (
        <div>
            <input type="text" onChange={() => onInput(this.value)}/>
            <input type="button" value="Add" onClick={onAddTodo}/>
        </div>
    )
}

export default NewTodoItem
