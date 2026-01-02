import { Component } from 'react';

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
        <h4>All the tasks!</h4>
        <ul className='list-disc'>
          {this.state.todos.map(todo => (
            <li key={todo}> {todo}</li>
          ))}
        </ul>
      </section>
    );
  }
}
