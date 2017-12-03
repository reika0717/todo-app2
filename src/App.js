import React, { Component } from 'react';
import MyForm from './components/MyForm'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      task: 'task1'
    }
  }

  render() {
    return (
      <div>
        <MyForm />
        <ul>
          <li>{this.state.task}</li>
        </ul>
      </div>
    );
  }
}

export default App;
