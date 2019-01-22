import React, { Component } from 'react';
import Todos from './components/Todos';
import './App.css'

class App extends Component {
  state={todos :[
   {
    id: 1,
    title: "Take out the trash",
    completed: true
   },
   {
    id: 2,
    title: "Take out the trash2",
    completed: false
   },
   {
    id: 3,
    title: "Take out the trash3",
    completed: true
   }
  ]}

  render() {
    return (
    <div className="App">
      <Todos todos={this.state.todos} /> 
    </div>
    );
  }
}

export default App;
