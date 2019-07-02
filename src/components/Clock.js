import React, { Component } from 'react';

class Clock extends Component {
  constructor(props){
    super(props);
    this.state = {
      time: ""
    }
  }
  
  componentDidMount = () => {
    this.updateTime();
    this.interval = setInterval(() => {this.updateTime()}, 1000);
  }
  
  stop = () => {
    clearInterval(this.interval);
  }
  
  updateTime = () => {
    let t = new Date().toLocaleTimeString();
    this.setState({time: t});
  }
  
  render() {
    return (
      <div>
        <h1>The current time is: {this.state.time}</h1>
        <button className="btn btn-primary" onClick={this.stop}>Stop</button>
        <button className="btn btn-danger" onClick={this.componentDidMount}>Start</button>
      </div>
    );
  }
}

export default Clock;