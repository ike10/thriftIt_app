import React, {useContext} from 'react'
import {TodoContext} from '../context/TodoContext'
import '../styles/todoNote.css'

const TodoNote = ({note}) => {
    const {DeleteTodo} = useContext(TodoContext)
    const TodoDate = new Date()
    return(
        <div className='TodoNote'>
            <p className='TodoNoteText'>{note}</p>
            <p className='TodoNoteTime'>{`${TodoDate.getHours()}:${TodoDate.getMinutes()}:${TodoDate.getSeconds()}`}</p>
            <p className='TodoNoteDate'>{`${TodoDate.getDate()}/${TodoDate.getMonth()}/${TodoDate.getFullYear()}`}</p>
            <button className='TodoNoteButton' onClick={DeleteTodo}>Delete</button>
        </div>
    )
}

export default TodoNote