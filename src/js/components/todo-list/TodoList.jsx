import React, { useState } from 'react'
import TodoItem from './todo/TodoItem';
import NewTodoItem from './todo/NewTodoItem';
import s from '../../../css/modules/todo-list/TodoList.module.css'

const TodoList = () => {
    const [todos, setTodos] = useState([
        {id: 0, text: 'buy bread', complited: false},
        {id: 1, text: 'buy milk', complited: false},
        {id: 2, text: 'buy cheese', complited: true},
    ])

    const dispatch = (action, todoItem) => {
        switch(action) {
            case 'add': {
                setTodos(todos => [...todos, todoItem]);
                break;
            }
            case 'delete': {
                setTodos(todos => todos.filter(todo => todo.id !== todoItem.id))
            }
        }
        // console.log(todos.map(t => t.id));
    }

    return (
        <div className={s.TodoList}>
            <div className="contaner">
                <NewTodoItem dispatch={dispatch} todosLen={todos.reduce((val, acc) => {
                    console.log(val.id);
                    return 1
                })}/>
                {todos.map(todo => <TodoItem dispatch={dispatch} todo={todo} key={todo.id}/>)}
            </div>
        </div>
    )
}

export default TodoList
