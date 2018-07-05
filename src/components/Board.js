import React, { Component } from 'react';
import Note from './Note';
import FaPlus from 'react-icons/lib/fa/plus';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: []
    };
  }

  componentWillMount() {
    let self = this;
    if (this.props.count) {
      fetch(`https://baconipsum.com/api/?type=all-meat&sentences=${this.props.count}`)
        .then(response => response.json())
        .then(json => json[0]
                        .split('. ')
                        .forEach(sentence => self.addNote(sentence.substring(0, 25))))
    }
  }

  updateNote = (newText, i) => {
    console.log("updating item at index", i, newText);
    this.setState(prevState => ({
      notes: prevState.notes.map(
        note => (note.id !== i ? note : { ...note, note: newText })
      )
    }));
  };

  addNote = (text) => {
    this.setState(prevState => ({
      notes: [
        ...prevState.notes,
        {
          id: this.nextId(),
          note: text
        }
      ]
    }));
  }

  nextId = () => {
    this.uniqueId = this.uniqueId || 0
    return this.uniqueId++
  }

  removeNote = (id) => {
    console.log("removing item at", id);
    this.setState(prevState => ({
      notes: prevState.notes.filter(note => note.id !== id)
    }));
  };

  eachNote = (note, i) => {
    return (
      <Note
        key={note.id}
        index={note.id}
        onChange={this.updateNote}
        onRemove={this.removeNote}
      >
        {note.note}
      </Note>
    );
  };

  render() {
    return (
      <div className="board">
        {this.state.notes.map(this.eachNote)}
        <button
          onClick={() => {this.addNote('New Note')}}
          id="add"
        >
          <FaPlus/>
        </button>
      </div>
    );
  }
}

export default Board;