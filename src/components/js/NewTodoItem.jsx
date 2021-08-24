import React, { useState } from 'react'

const NewTodoItem = ({addTodo}) => {
    
    const [todoText, setTodoText] = useState('');

    const onInput = e => {
        setTodoText(e.target.value);
    }

    const onAddTodo = () => {
        addTodo({
            text: todoText,
            isDone: false
        });
    }

    return (
        <div>
            <input type="text" onChange={onInput} value={todoText}/>
            <input type="button" value="Add" onClick={onAddTodo}/>
        </div>
    )
}

export default NewTodoItem
