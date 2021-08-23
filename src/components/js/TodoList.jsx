import React, { useState } from 'react'
import TodoItem from './TodoItem';
import NewTodoItem from './NewTodoItem';
import c from '../css/TodoList.module.css';

const TodoList = props => {

    const [todos, setTodos] = useState([
        {text: 'buy bread', isDone: false},
        {text: 'buy beer', isDone: false},
        {text: 'buy soap', isDone: true},
    ]);

    const addTodo = newTodo => {
        setTodos([...todos, newTodo]);
    }

    const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    return (
        <div className={c.TodoList}>
            <h2>Todo List</h2>
            <NewTodoItem addTodo={addTodo}/>
            {todos.map(todo => <TodoItem todo={todo}/>)}
        </div>
    )
}

export default TodoList;