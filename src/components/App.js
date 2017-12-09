import React, { Component } from 'react';
import './App.css';
import {addRecipe,removeFromCalendar} from '../actions'
import {connect} from 'react-redux'
class App extends Component {
  render() {
    console.log("Props", this.props)
    return (
      <div>
        Hello World!
      </div>
    );
  }
}

//Map a redux state to component props
function mapStoreToProps(calendar){
  const daysOrder = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday']
    return  {
    calendar: daysOrder.map((day)=>({
      day,
      meals: Object.keys(calendar[day]).reduce((meals,meal)=> {
        meals[meal] = calendar[day][meal]?calendar[day][meal]:null
        return meals
      },{})
    }))
  }
}

function mapDispatchToProps(dispatch){
return {
  selectRecipe:(data) => dispatch(addRecipe(data)),
  remove:(data) => dispatch(removeFromCalendar(data))
}
}
export default connect(mapStoreToProps,mapDispatchToProps)(App);
