import React, { useState } from 'react'
import s from '../../../../css/modules/todo-list/todo/NewTodoItem.module.css'

const NewTodoItem = (props) => {
    const [text, setText] = useState('')

    const onTypeText = (e) => {
        setText(e.target.value);
    }

    const onAddNewTodoItem = () => {
       props.dispatch('add', {
            id: props.todosLen,
            text: text,
            complited: false
        });
        setText('');
    }

    return (
        <div className="NewTodoItem-block">
            <input type="text" value={text} onChange={onTypeText}/>
            <input type="button" onClick={onAddNewTodoItem}/>
        </div>
    )
}   

export default NewTodoItem