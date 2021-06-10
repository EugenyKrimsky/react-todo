import React from 'react'
import s from '../../../../css/modules/todo-list/todo/NewTodoItem.module.css'

export default class NewTodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }

        this.onChange = this.onChange.bind(this);
        this.onAddNewTodoItem = this.onAddNewTodoItem.bind(this);
    }

    render() {
        return (
            <div className="NewTodoItem-block">
                <input type="text" value={this.state.text} onChange={this.onChange}/>
                <input type="button" onClick={this.onAddNewTodoItem}/>
            </div>
        )
    }

    onChange(e) {
        this.setState(state => ({
            text: e.target.value
        }))
    }

    onAddNewTodoItem() {
        if (this.state.text !== '') {
            this.props.addNewTodoItem({
                id: this.props.todosLen,
                text: this.state.text,
                hasDone: false
            });

            this.setState(state => ({
                text: ''
            }))
        }
    }
}   