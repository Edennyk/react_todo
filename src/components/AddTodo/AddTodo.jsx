import React, { useState } from 'react'
import {v4 as uuidv4} from 'uuid';

export default function AddTodo({onAdd}) {
    const [text, setText] = useState('');
    const handleChange = (e) => setText(e.target.value);
    const handleSubmit = (e) => {
      e.preventDefault();
      onAdd({ id: uuidv4(), text, status:'active'});
      // 텍스트 초기화
      setText('');
    }
  
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={text} placeholder="Add Todo" onChange={handleChange}/>
            <button>Add New</button>
        </form>
    </div>
  )
}
