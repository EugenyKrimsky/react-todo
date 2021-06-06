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

    onClickCheckBox = () => {
        this.setState(state => ({
            hasDone: !state.hasDone
        }))
    }

    componentDidUpdate() {
        console.log(s);
    }

    render() {
        return (
            <div className={s.todo}>
                <input type="checkbox" onChange={this.onClickCheckBox}/>
                <p style={this.state.hasDone ? {color: 'red' } : {color: 'black'}}>{this.props.todo.text}</p>
            </div>
        )
    }
}