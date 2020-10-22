import React from 'react';

function EmployeeList(props){
 
  const movies = props.employees[props.index].favoriteMovies.map((e, index)=> <li key={index}>{e}</li>)
  
    return(
    <div className="Employee-List">
        <h1>{props.employees[props.index].name.first} {props.employees[props.index].name.last}</h1>
        <h2>Page {props.index+1}  / {props.employees.length}</h2>
        <p>From: {props.employees[props.index].city}, {props.employees[props.index].country} </p>
       <p>Employer : {props.employees[props.index].employer}</p>
       <p>Job title: {props.employees[props.index].title}</p>
        
     
      <div className="favorite-movies">
          <p>Favorite Movies:</p>
          <ol>
            {movies}
          </ol>
        </div>
      </div>
    )
  }


export default EmployeeList;