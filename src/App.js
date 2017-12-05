import React, { Component } from 'react';
import MyForm from './components/MyForm'
import v4 from 'uuid/v4'
import ToggleButton from './components/ToggleButton'
import TodoList from './components/TodoList'
import store, {addTodoAction, toggleTodoAction} from './store'

class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      tasks :store.getState(),
      current: 'all'
    }
  }

  render() {
    const {current} = this.state
    const tasks = store.getState()
    return (
      <div>
        <MyForm myEvent={desc => store.dispatch(addTodoAction(desc))}/>
        <TodoList
          current={current}
          tasks={tasks}
          myEvent={id=>{store.dispatch(toggleTodoAction(id))}}/>
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
