import React, {useContext, useEffect} from 'react'
import {TodoContext} from '../context/TodoContext'
import TodoNote from '../components/todoNote'

const TodoForm = () => {

    const {Todo} = useContext(TodoContext)
    const TodoDate = new Date()

    useEffect(() =>{
        console.log(Todo)
    }, [])

    return(
        <div>
            <h2 style={{textAlign:'center'}}>You have {Todo.length} Todos remaining</h2>
            <h3 style={{ textAlign: 'center' }}>{`${TodoDate.getDate()}/${TodoDate.getMonth()}/${TodoDate.getFullYear()}`}</h3>
            <h4 style={{ textAlign: 'center'}}>{`${TodoDate.getHours()}:${TodoDate.getMinutes()}:${TodoDate.getSeconds()}`}</h4>
            {
                Todo.map(item=>{
                    return(
                        <TodoNote note={`Note: ${item.info}`} key={item.id} />
                    )
                })
            }
        </div>
    )
}

export default TodoForm