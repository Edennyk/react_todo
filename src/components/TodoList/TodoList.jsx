import React, { useEffect, useState } from 'react'
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';
import styles from './TodoList.module.css'

const InitTodoList = [
    {id:1, text:'cleanning room', status:'active'},
    {id:2, text:'walking with Jennie', status:'active'},
];

export default function TodoList({filter}){
    const [todos, setTodos] = useState(readTodos);

    //  새롭게 추가 되는 todo를 받아서 새로운 todo를 추가 하면 된다
    const handleAdd = (todo) =>{
        // updates new todo at todos list
        setTodos([...todos, todo]);
    }

    const handleUpdate = (updated) => setTodos(todos.map(todo => todo.id === updated.id ? updated : todo));

    const handleDelete = (deleted) => setTodos(todos.filter(todo => todo.id !== deleted.id));

    useEffect(()=>{
        localStorage.setItem('todos', JSON.stringify(todos));
    },[todos]);
    
    const filterd = getFilterdItems(todos, filter);
    return(
        <section className={styles.container}>
            <ul className={styles.list}>
                {filterd.map((item)=>(
                     <Todo key={item.id} todo={item} onUpdate={handleUpdate} onDelete={handleDelete} />
                ))}
            </ul>
             {/* onAdd => add가 되면 callback 함수인 handleAdd를 호출 */}
            <AddTodo onAdd={handleAdd} />
        </section>
    )
}

function readTodos(){
    const todos = localStorage.getItem('todos');
    return todos ? JSON.parse(todos) : [];
}

function getFilterdItems(todos, filter){
    if(filter === 'all') { return todos;}

    return todos.filter((todo => todo.status === filter));
}