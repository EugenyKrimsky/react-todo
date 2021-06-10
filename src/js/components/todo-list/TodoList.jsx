import React from 'react'
import TodoItem from './todo/TodoItem';
import NewTodoItem from './todo/NewTodoItem';
import s from '../../../css/modules/todo-list/TodoList.module.css'

export default class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                {id: 0, text: 'buy bread', hasDone: false},
                {id: 1, text: 'buy milk', hasDone: false},
                {id: 2, text: 'buy cheese', hasDone: true},
            ]
        }

        this.addNewTodoItem = this.addNewTodoItem.bind(this)
    }

    render() {
        return (
            <div className={s.TodoList}>
                <div className="contaner">
                    <NewTodoItem addNewTodoItem={this.addNewTodoItem} todosLen={this.state.todos.length}/>
                    {this.state.todos.map(todo => <TodoItem todo={todo} key={todo.id}/>)}
                </div>
            </div>
        )
    }

    addNewTodoItem(newTodoItem) {
        this.setState(state => ({
            todos: [...state.todos, newTodoItem]
        }))
    }
}