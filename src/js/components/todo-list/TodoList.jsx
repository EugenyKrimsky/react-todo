import React from 'react'
import Todo from './todo/Todo';
import NewTodo from './todo/NewTodo';
import s from '../../../css/modules/todo-list/TodoList.module.css'

export default class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.todos = [
            {id: 241234, text: 'buy bread', hasDone: false},
            {id: 432665, text: 'buy milk', hasDone: false},
            {id: 876457, text: 'buy cheese', hasDone: true},
        ]

        this.onAddNewTodo = this.onAddNewTodo.bind(this)
    }

    render() {
        return (
            <div className={s.todo_list}>
                <div className="contaner">
                    <NewTodo onAddNewTodo={this.onAddNewTodo}/>
                    {this.todos.map(todo => <Todo todo={todo} key={todo.id}/>)}
                </div>
            </div>
        )
    }

    onAddNewTodo(newTodo) {
        this.setState(state => ({
            todos: [...state.todos, newTodo]
        }))
    }

    componentDidUpdate() {
        console.log(this.state.todos);
    }
}