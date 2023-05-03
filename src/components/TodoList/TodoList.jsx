import React, { useState } from 'react'
import AddTodo from '../AddTodo/AddTodo';

const InitTodoList = [
    {id:1, text:'cleanning room', status:'active'},
    {id:2, text:'walking with Jennie', status:'active'},
];

export default function TodoList(){
    const [todos, setTodos] = useState(InitTodoList);

    const handleAdd = (todo) =>{
        // updates new todo at todos list
        setTodos
    }
   
    return(
        <section>
            <ul>
                {todos.map((item)=>(
                     <li key={item.id}>{item.text}</li>
                ))}
            </ul>
            <AddTodo onAdd={handleAdd} />
        </section>
    )
}
