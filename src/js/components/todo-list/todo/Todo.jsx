import React from 'react'
import s from '../../../../css/modules/todo-list/todo/Todo.module.css'

export default class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.todo.id,
            text: this.props.todo.text,
            hasDone: this.props.todo.hasDone,
        };
        
        this.onClickCheckBox = this.onClickCheckBox.bind(this);
    }

    render() {
        return (
            <div className={s.todo}>
                <input type="checkbox" onClick={this.onClickCheckBox} name="isComplete" defaultChecked={this.state.hasDone}/>
                <label htmlFor="isComplete" className={this.getStyle()}>{this.props.todo.text}</label>
            </div>
        )
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