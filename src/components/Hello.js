import React, { Component } from 'react';

class Hello extends Component {

  constructor(props){
    super(props);
    this.state = {
      list: [
  
      ],
      task: ""
    }
  }

  changeHandler = (e) => {
    this.setState({task: e.target.value});
  } 

  addTask = (e) => {
    e.preventDefault();
    let tasks = [...this.state.list];
    tasks.push(this.state.task);
    this.setState({list: tasks, task: ""});
  }

  render(){
    return (
      <div>
        <hr />
        <h2>Things I need to do:</h2>
        <ul>
          {
            this.state.list.map( (thing, i) => 
              <li key={i}>{thing}</li>
            )
          }
        </ul>
        <form>
          <label htmlFor="thing">Your task</label>
          <input 
            className="form-control" 
            id="thing" 
            name="thing" 
            onChange={this.changeHandler} 
            value={this.state.task}
          />
          <button className="btn btn-success" onClick={this.addTask}>Add Task</button>
        </form>
      </div>
    )
  }
}

export default Hello;