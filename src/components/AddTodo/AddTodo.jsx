import React, { useState } from 'react'
import {v4 as uuidv4} from 'uuid';
import styles from './AddTodo.module.css';

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
        <form onSubmit={handleSubmit} className={styles.form}>
            <input type="text" value={text} placeholder="Add Todo" onChange={handleChange} 
            className={styles.input}/>
            <button className={styles.button}>Add</button>
        </form>
    </div>
  )
}
