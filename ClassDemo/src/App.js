import React, { Component } from 'react'
import './App.css';
import ClassDemo from './Component/ClassDemo'
import FunctionDemo from './Component/FunctionDemo'

export class App extends Component {
  render() {
    return (
      <div className="App1">
        <ClassDemo />
        {/* <FunctionDemo /> */}
      </div>
    )
  }
}

export default App