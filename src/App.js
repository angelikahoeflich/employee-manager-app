import React, {Component} from 'react';
import './App.css';
import EmployeeList from './Components/EmployeeList';
import data from './lib/data';
import Controls from './Components/Control'

class App extends Component {
  constructor(){
    super()


    this.state = {
      employees: data,
      index:0
    }

      this.nextPage = this.nextPage.bind(this);
      this.prevPage = this.prevPage.bind(this);
      this.deletePage = this.deletePage.bind(this)
  }


  nextPage(){
    if(this.state.index < this.state.employees.length -1) {
    this.setState({
      index: this.state.index + 1
    })
  }
}


  prevPage(){
    if(this.state.index > 0) {  
    this.setState({
      index:this.state.index - 1
    })
  }
}

deletePage(){
  let newList = this.state.employees.filter((e,index) => index !== this.state.index)
  this.setState({
    employees: newList
  })
}


 render(){
  return (
    <div>
      <header className='Home'>Home</header>
      
      <EmployeeList employees={this.state.employees} index={this.state.index}/>

      <Controls nextPage={this.nextPage} prevPage={this.prevPage} deletePage={this.deletePage}/>

    </div>
  );
}
}

export default App;
