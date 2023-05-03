import React, { useState } from 'react'

export default function AddTodo({onAdd}) {
    const [text, setText] = useState();
    const handleAddTodo =(e) => {
        setTodo = e.target.value;
    }
  return (
    <div>
        <form>
            <input type="text" value={text} placeholder="Add Todo" />
            <button onClick={handleAddTodo}>Add New</button>
        </form>
    </div>
  )
}
