import { useState } from 'react';
import Count from './Count';

export default function FunctionalInput({ name }) {
  const [todos, setTodos] = useState(['Just some demo tasks', 'As an example']);
  const [inputVal, setInputVal] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);

  function handleInputChange(e) {
    setInputVal(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (inputVal.trim() === '') return;

    if (editingIndex !== null) {
      setTodos(prevTodos =>
        prevTodos.map((todo, index) => {
          return index === editingIndex ? inputVal : todo;
        })
      );
      setEditingIndex(null);
      setInputVal('');
      setIsEditing(false);
      return;
    }

    setTodos(prevTodos => [...prevTodos, inputVal]);
    setInputVal('');
  }

  function handleDelete(id) {
    const updatedTodos = todos.filter((todo, index) => index !== id);
    setTodos(updatedTodos);
  }

  function handleEdit(id) {
    const task = todos.find((todo, index) => index === id);
    setInputVal(task);
    setIsEditing(true);
    setEditingIndex(id);
  }

  const buttonText = isEditing ? 'Resubmit' : 'Submit';

  return (
    <section className='border shadow-md p-4 flex flex-col gap-2 items-center rounded-sm border-neutral-700'>
      <h3 className='uppercase font-bold'>{name}</h3>
      <form className='flex items-center gap-2' onSubmit={handleSubmit}>
        <label htmlFor='task-entry'>Enter a task: </label>
        <input
          className='bg-neutral-200 rounded-sm'
          type='text'
          id='task-entry'
          name='task-entry'
          value={inputVal}
          onChange={handleInputChange}
        />
        <button
          className='hover:cursor-pointer rounded-sm hover:bg-neutral-950 hover:text-neutral-50 transition-all duration-150 border border-neutral-600 px-4 py-1'
          type='submit'
        >
          {buttonText}
        </button>
      </form>
      <Count todos={todos.length} />
      <h4>All the tasks!</h4>
      <ul className='list-disc'>
        {todos.map((todo, index) => (
          <div className='flex items-center gap-2 mb-2'>
            <li key={todo}>{todo}</li>
            <button
              className='border border-red-500 hover:cursor-pointer text-red-800 bg-red-50 px-3 py-0.5 rounded-sm'
              type='button'
              onClick={() => handleDelete(index)}
            >
              Delete
            </button>
            <button
              className='border border-sky-500 hover:cursor-pointer text-sky-800 bg-sky-50 px-3 py-0.5 rounded-sm'
              type='button'
              onClick={() => handleEdit(index)}
            >
              Edit
            </button>
          </div>
        ))}
      </ul>
    </section>
  );
}
