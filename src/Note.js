import React, { Component } from 'react';
import FaPencil from 'react-icons/lib/fa/pencil';

class Note extends Component {
  render() {
    return (
      <div className="note">
        <p>Learn React</p>
        <span>
          <button>Edit</button>
          <button>Remove</button>
        </span>
      </div>
    )
  }
}

export default Note;