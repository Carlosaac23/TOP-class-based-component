import { useState } from 'react';

export default function FunctionalInput({ name }) {
  const [todos, setTodos] = useState(['Just some demo tasks', 'As an example']);
  const [inputVal, setInputVal] = useState('');

  function handleInputChange(e) {
    setInputVal(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setTodos(prevTodos => [...prevTodos, inputVal]);
    setInputVal('');
  }

  return (
    <section>
      <h3>{name}</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor='task-entry'>Enter a task: </label>
        <input
          type='text'
          id='task-entry'
          name='task-entry'
          value={inputVal}
          onChange={handleInputChange}
        />
        <button type='submit'>Submit</button>
      </form>

      <h4>All the tasks!</h4>
      <ul>
        {todos.map(todo => (
          <li key={todo}> {todo}</li>
        ))}
      </ul>
    </section>
  );
}
