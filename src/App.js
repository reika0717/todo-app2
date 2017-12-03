import React, { Component } from 'react';
import MyForm from './components/MyForm'
import v4 from 'uuid/v4'
import ToggleButton from './components/ToggleButton'
import TodoList from './components/TodoList'

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
      ],
      current: 'all'
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
     // ↑変数宣言tasksじゃないとなぜか動かない
    const state = {...this.state, tasks}
    this.setState(state)
  }

  render() {
    const {tasks} = this.state
    return (
      <div>
        <MyForm myEvent={desc => this.addTask(desc)}/>
        <TodoList
          tasks={tasks}
          myEvent={(id)=>{this.setState(this.toggleTask(id, this.state))}}/>
        <ToggleButton>done</ToggleButton>
        <ToggleButton>not yet</ToggleButton>
        <ToggleButton>all</ToggleButton>
      </div>
    );
  }
}

export default App;
