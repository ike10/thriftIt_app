import React, { createContext, useState } from 'react'

export const TodoContext = createContext()

const TodoContextProvider = ({children}) => {
    const [Text, SetText] = useState('')
    const [Todo, SetTodo] = useState([])
    const AddText = event => SetText(event.target.value)
    
    const DeleteTodo = (id) => {
        SetTodo(Todo.filter(Todo => Todo.id !== id))
    }
    const AddTodo = () => {
        SetTodo([...Todo, {id : Todo.length+1, info: Text}])
    }
    return(
        <TodoContext.Provider value={{ Text, Todo, AddTodo, AddText, DeleteTodo}}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoContextProvider


