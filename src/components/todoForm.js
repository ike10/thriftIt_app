import React, {useContext} from 'react'
import {TodoContext} from '../context/TodoContext'

const TodoForm = () => {
    const { AddTodo, Text, AddText} = useContext(TodoContext)
    return(
        <div 
            style={{
                display:'flex', 
                flexDirection:'column',
                justifyContent: 'center',
                alignItems: 'center',
                }}>
            <p>Note: </p>
            <input 
            type='text' 
            placeholder='Set Note'
            style={{
                height: 60,
                borderRadius: 2,
                width: 300,
                backgroundColor: '#282c34',
                color: 'white',
            }}
            value={Text}
            onChange={AddText}
            />
            <button 
            onClick={AddTodo}
            style={{
                height: 40,
                borderRadius: 2,
                borderWidth: 0,
                marginTop: 10,
                width: 150,
                color: 'white',
                backgroundColor: '#48b4e0',
            }}
            >Add</button>
        </div>
    )
}

export default TodoForm