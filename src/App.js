import React from 'react';
import MyForm from './components/MyForm'
import ToggleButton from './components/ToggleButton'
import TodoList from './components/TodoList'
import store from './store'
import {addTodoAction, toggleTodoAction, currentAction} from './actions'

const App = () => {
  const current = store.getState().current
  const tasks = store.getState().todoList

return (
    <div>
      <MyForm myEvent={desc => store.dispatch(addTodoAction(desc))}/>
      <TodoList
        current={current}
        tasks={tasks}
        />
      <p>{current}</p>
      <ToggleButton
        myEvent={()=>{store.dispatch(currentAction('done'))}}
        >done</ToggleButton>
      <ToggleButton
        myEvent={()=>store.dispatch(currentAction('not yet'))}
        >not yet</ToggleButton>
      <ToggleButton
        myEvent={()=>store.dispatch(currentAction('all'))}
        >all</ToggleButton>
    </div>
    )
  }

export default App;
