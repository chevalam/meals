import React, { Component } from 'react';
import './App.css';
import {addRecipe} from '../actions'

class App extends Component {
  state = {
    calendar : null
  }
  submitFood=()=>{
    this.props.store.dispatch(addRecipe({
      day:'monday',
      meal: 'breakfast',
      recipe:{
        label: this.input.value
      }
    }))
    this.input.value = ''
  }
  componentDidMount(){
    let {store} = this.props
    store.subscribe(()=>(this.setState({
          calendar: store.getState()
        })))

  }
  render() {
    return (
      <div>
      <input
        placeholder="Monday's breakfast"
        ref={(input)=>this.input = input}
        type-='text'
      />
    <button
      type="submit"
      onClick={this.submitFood}>Submit
    </button>
    <pre>
      Monday's breakfast = {this.state.calendar && this.state.calendar.monday.breakfast}
    </pre>
      </div>
    );
  }
}

export default App;
