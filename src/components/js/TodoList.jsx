import React, { useState } from 'react'
import TodoItem from './TodoItem';

const TodoList = props => {

    const [todos, setTodos] = useState([
        {text: 'buy bread', isDone: false},
        {text: 'buy beer', isDone: false},
        {text: 'buy soap', isDone: true},
    ]);

    const onAddTodo = newTodo => {
        setTodos([...todos, newTodo]);
    }

    const onDeleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    return (
        <div>
            {todos.map(todo => <TodoItem todo={todo}/>)}
        </div>
    )
}

export default TodoList;