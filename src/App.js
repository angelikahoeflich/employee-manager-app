import React, {Component} from 'react';
import './App.css';
import EmployeeList from './Components/EmployeeList';
import data from './lib/data';

class App extends Component {
  constructor(){
    super()

    this.state = {
      employees: data,
      index:0
    }
      this.nextPage = this.nextPage.bind(this);
      this.prevPage = this.prevPage.bind(this)
  }


  nextPage(){
    this.setState({
      index: this.state.index + 1
    })
  }

  prevPage(){
    this.setState({
      index:this.state.index - 1
    })
  }
 
 render(){
  return (
    <div>
      <header className='Home'>Home</header>
      
      <EmployeeList employees={this.state.employees} index={this.state.index}/>

           <div className="control">
          <button onClick={this.prevPage}>Prev</button>
          <button>Edit</button>
          <button>Delete</button>
          <button>New</button>
          <button onClick={this.nextPage}>Next</button>
        </div>

    </div>
  );
}
}

export default App;
