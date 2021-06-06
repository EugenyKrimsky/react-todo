import React from 'react'

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
        console.log(this.state.hasDone);
    }

    render() {
        const todo = {
            width: '290px',
            height: '40px',

            display: 'flex',
            alignItems: 'center',
            border: '1px solid black',
            borderRadius: '5px',
        }

        return (
            <div style={todo}>
                <input type="checkbox" onChange={this.onClickCheckBox}/>
                <p style={this.state.hasDone ? {color: 'red' } : {color: 'black'}}>{this.props.todo.text}</p>
            </div>
        )
    }
}