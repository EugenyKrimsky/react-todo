import React from 'react'
// import s from '../../../css/modules/todo-list/NewTodo.module.css'

export default class NewTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }

        this.onChange = this.onChange.bind(this);
    }

    render() {
        return (
            <div className="NewTodo-block">
                <input type="text" value={this.state.text} onChange={this.onChange}/>
                <input type="button" onClick={() => this.props.onAddNewTodo(this.state.text)}/>
            </div>
        )
    }

    onChange(e) {
        this.setState(state => ({
            text: e.target.value
        }))
    }

    componentDidUpdate() {
        console.log(this.state.text);
    }
}   