import React from 'react';
import './App.css';
import Overview from './components/Overview'
import uniqid from "uniqid";

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      tasks: [],
      task: { 
        text: '',
        id: uniqid()
    },
    }
  }

  handleChange = (e) => {
    this.setState({
      task: {
        text: e.target.value,
        id: this.state.task.id,
      }
    })
  }

  onSubmitTask = (e) => {
    e.preventDefault()
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: { 
        text: '',
        id: uniqid()
      }
    })
  }

  render(){
    const { tasks, task } = this.state

    return (
      <div className="App">
        <h2>Hello and welcome to the task master</h2>
        <form onSubmit={this.onSubmitTask}>
          <input 
          onChange={this.handleChange}
          value={task.text}
          id="taskInput" 
          type="text"/>
          <button type="submit">
            Submit
          </button>
        </form>
        <Overview tasks={tasks}/>
      </div>
    );
  }
}

export default App;
