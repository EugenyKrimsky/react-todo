import React from 'react'
import s from '../../../../css/modules/todo-list/todo/TodoItem.module.css'

export default class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.todo.id,
            text: this.props.todo.text,
            hasDone: this.props.todo.hasDone,
        };
        
        this.onClickCheckBox = this.onClickCheckBox.bind(this);
        this.onDeleteTodoItem = this.onDeleteTodoItem.bind(this);
    }

    render() {
        return (
            <div className={s.TodoItem}>
                <div>
                  <input type="checkbox" onChange={this.onClickCheckBox} name="isComplete" checked={this.state.hasDone}/>
                  <label htmlFor="isComplete" className={this.getStyle()}>{this.props.todo.text}</label>
                </div>
                <input type="button" value="X" onClick={this.onDeleteTodoItem}/>
            </div>
        )
    }

    onDeleteTodoItem() {
        this.props.deleteTodoItem(this.state)
    }

    onClickCheckBox() {
        this.setState(state => ({
            hasDone: !state.hasDone,
        }));
    }

    getStyle() {
        return this.state.hasDone ? s.complited : s.uncomplited;
    }
}