import React, { Component } from 'react';
import MyForm from './components/MyForm'
import v4 from 'uuid/v4'

class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      tasks :[
        {
          id:v4(),
          description: 'task1',
          completed: false
        },
        {
          id:v4(),
          description: 'task2',
          completed: false
        },
        {
          id:v4(),
          description: 'task3',
          completed: false
        }
      ]
    }
  }

  toggleTask(id, state){
    const tasks = state.tasks.map( task =>{
    if(task.id === id) return {...task, completed: !task.completed}
    else return {...task}
    })
    const newState={...state, tasks}
    return newState
  }

  addTask(description){
    const tasks = [...this.state.tasks, {id:v4(), description: description, completed: false}]
    const state = {...this.state, tasks}
    this.setState(state)
  }

  render() {
    const {tasks} = this.state
    return (
      <div>
        <MyForm myEvent={desc => this.addTask(desc)}/>
        <ul>
          {tasks.map(({id, description, completed}) =>(
          <li
            key={id}
            onClick={()=>{this.setState(this.toggleTask(id, this.state))}}
            style={{textDecoration: completed ? 'line-through' : 'none'}}
            >{description}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
