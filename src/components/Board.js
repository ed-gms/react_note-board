import React, { Component } from 'react';
import Note from './Note';

class Board extends Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: [
        {
          id: 1,
          note: "reminder 1"
        },
        {
          id: 2,
          note: "reminder 2"
        },
        {
          id: 3,
          note: "reminder 3"
        }
      ]
    }
  }

  eachNote = (note, i) => {
    return (
      <Note
        key={i}
        index={i}
      >
        {note.note}
      </Note>

    )
  }

  render() {
    return (
      <div className="board">
        {this.state.notes.map(this.eachNote)}
      </div>
    )
  }
}

export default Board;