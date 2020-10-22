import React from 'react';

function EmployeeList(){
 
  
    return(
    <div className="employee-list">
        <h1>Name:</h1>
        <p>From: employee.location </p>
        <p>Job title: employee.title</p>
        <p>Employer : employee.empoloyer</p>
     
      <div className="favorite-movies">
          <p>Davorite Movies: employee.favorite-movies</p>
          <ol>
            <li>Movie </li>
            <li>Movie</li>
            <li>Movie</li>
          </ol>
        </div>
      </div>
    )
  }


export default EmployeeList;