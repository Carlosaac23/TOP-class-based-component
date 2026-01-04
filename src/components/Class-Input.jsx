import { Component } from 'react';
import Count from './Count';

export default class ClassInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: ['Just some demo tasks', 'As an example'],
      inputVal: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    this.setState(state => ({
      ...state,
      inputVal: e.target.value,
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState(state => ({
      todos: state.todos.concat(state.inputVal),
      inputVal: '',
    }));
  }

  handleDelete(id) {
    this.setState(state => ({
      todos: state.todos.filter((todo, index) => index !== id),
    }));
  }

  render() {
    return (
      <section className='border shadow-md p-4 flex flex-col gap-2 items-center rounded-sm border-neutral-700'>
        <h3 className='uppercase font-bold'>{this.props.name}</h3>
        <form className='flex items-center gap-2' onSubmit={this.handleSubmit}>
          <label htmlFor='task-entry'>Enter a task: </label>
          <input
            className='bg-neutral-200 rounded-sm'
            type='text'
            id='task-entry'
            name='task-entry'
            value={this.state.inputVal}
            onChange={this.handleInputChange}
          />
          <button
            className='hover:cursor-pointer rounded-sm hover:bg-neutral-950 hover:text-neutral-50 transition-all duration-150 border border-neutral-600 px-4 py-1'
            type='submit'
          >
            Submit
          </button>
        </form>
        <Count todos={this.state.todos.length} />
        <h4>All the tasks!</h4>
        <ul className='list-disc'>
          {this.state.todos.map((todo, index) => (
            <div className='flex items-center gap-2 mb-2'>
              <li key={todo}>{todo}</li>
              <button
                className='border border-red-500 hover:cursor-pointer text-red-800 bg-red-50 px-3 py-0.5 rounded-sm'
                type='button'
                onClick={() => this.handleDelete(index)}
              >
                Delete
              </button>
            </div>
          ))}
        </ul>
      </section>
    );
  }
}
