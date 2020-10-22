import React from 'react'

function Control(props) {
    return (
      <div>
        <div className="control">
          <button onClick={props.prevPage}> ← Prev</button>
          <div>
          <button>Edit</button>
          <button onClick={props.deletePage}> Delete</button>
          <button>New</button>
          </div>
          <button onClick={props.nextPage}>Next → </button>
        </div>
      </div>
    )
  }


export default Control;
