import React, {Component} from 'react';
import './App.css';
import EmployeeList from './Components/EmployeeList';
import data from './lib/data';

class App extends Component {
  constructor(){
    super()

    this.state = data
  }
 
 render(){
  return (
    <div>
      <header className='Home'>Home</header>
      
      <EmployeeList/>
           <div className="control">
          <button>Prev</button>
          <button>Edit</button>
          <button>Delete</button>
          <button>New</button>
          <button>Next</button>
        </div>

    </div>
  );
}
}

export default App;
