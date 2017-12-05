import React, { Component } from 'react';
import MyForm from './components/MyForm'
import v4 from 'uuid/v4'
import ToggleButton from './components/ToggleButton'
import TodoList from './components/TodoList'
import store from './store'

class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      tasks :store.getState(),
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
    const {tasks, current} = this.state
    return (
      <div>
        <MyForm myEvent={desc => this.addTask(desc)}/>
        <TodoList
          current={current}
          tasks={tasks}
          myEvent={(id)=>{this.setState(this.toggleTask(id, this.state))}}/>
        <ToggleButton
          myEvent={()=>this.setState({...this.state, current: 'done'})}
          >done</ToggleButton>
        <ToggleButton
          myEvent={()=>this.setState({...this.state, current: 'not yet'})}
          >not yet</ToggleButton>
        <ToggleButton
          myEvent={()=>this.setState({...this.state, current: 'all'})}
          >all</ToggleButton>
      </div>
    );
  }
}

export default App;
