import React from 'react'
import Todo from './todo/Todo';

export default class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.todos = [
            {id: 241234, text: 'buy bread', hasDone: false},
            {id: 432665, text: 'buy milk', hasDone: false},
            {id: 876457, text: 'buy cheese', hasDone: false},
        ]
    }

    render() {
        return (
            <div>
                {this.todos.map(todo => {return <Todo todo={todo}/>})}
            </div>
        )
    }
}