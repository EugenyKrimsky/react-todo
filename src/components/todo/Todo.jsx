import React from 'react'

export default class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.todo = this.props.todo
    }

    handleClick = () => {
        this.setState({
            todo: {
                hasDone: !this.hasDone
            }
        })
    }

    render() {
        const todo = {
            display: 'flex',
            alignItems: 'center',
        }

        return (
            <div style={todo}>
                <input type="checkbox" onClick={this.handleClick}/>
                <p>{this.props.todo.text}</p>
            </div>
        )
    }
}