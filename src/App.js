import React, { Component } from 'react';
import MyForm from './components/MyForm'
import v4 from 'uuid/v4'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      id:v4(),
      description: 'task1',
      completed: false
    }
  }

  render() {
    const {description, completed} = this.state
    return (
      <div>
        <MyForm />
        <ul>
          <li
            onClick={()=>{this.setState({completed: !completed})}}
            style={{textDecoration: completed ? 'line-through' : 'none'}}
            >{description}</li>
        </ul>
      </div>
    );
  }
}

export default App;
