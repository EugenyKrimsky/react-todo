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
        const style = {
            display: 'flex',
            justifyContent: 'center'
        }

        return (
            <div style={style}>
                <div className="contaner">
                    {this.todos.map(todo => <Todo todo={todo} />)}
                </div>
            </div>
        )
    }
}