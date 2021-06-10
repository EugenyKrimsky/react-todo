import React from 'react'
import TodoItem from './todo/TodoItem';
import NewTodoItem from './todo/NewTodoItem';
import s from '../../../css/modules/todo-list/TodoList.module.css'

export default class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: new Set([
                {text: 'buy bread', hasDone: false},
                {text: 'buy milk', hasDone: false},
                {text: 'buy cheese', hasDone: true}
            ])
        }

        this.addNewTodoItem = this.addNewTodoItem.bind(this);
        this.deleteTodoItem = this.deleteTodoItem.bind(this);
    }

    render() {
        return (
            <div className={s.TodoList}>
                <div className="contaner">
                    <NewTodoItem addNewTodoItem={this.addNewTodoItem} todosLen={this.state.todos.length}/>
                    {Array(this.state.todos).map(todo => <TodoItem todo={todo} key={todo.id} deleteTodoItem={this.deleteTodoItem}/>)}
                </div>
            </div>
        )
    }

    deleteTodoItem(todoItem) {
        this.setState(state => ({
            todos: state.todos.delete(todoItem)
        }))
    }

    addNewTodoItem(newTodoItem) {
        this.setState(state => ({
            todos: state.todos.add(newTodoItem)
        }))
    }

    componentDidUpdate() {
        console.log(this.state.todos);
    }
}