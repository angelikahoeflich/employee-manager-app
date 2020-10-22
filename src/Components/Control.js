import React from 'react'

function Control(props) {
    return (
      <div>
        <div className="control">
          <button onClick={props.prevPage}>Prev</button>
          <button>Edit</button>
          <button>Delete</button>
          <button>New</button>
          <button onClick={props.nextPage}>Next</button>
        </div>
      </div>
    )
  }


export default Control;
