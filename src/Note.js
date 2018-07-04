import React, { Component } from 'react';
import FaPencil from 'react-icons/lib/fa/pencil';
import FaTrash from 'react-icons/lib/fa/trash';
import FaFloppyO from "react-icons/lib/fa/floppy-o";

class Note extends Component {

  constructor(props) {
    super(props)
    this.state = {
      editing: false
    }
  }

  edit = () => {
    this.setState({
      editing: true
    })
  }
  remove = () => {
    alert('removing note')
  }

  save = () => {
    alert('saved!')
  }

  renderForm = () => {
    return (
      <div className="note">
        <form action="">
          <textarea/>
          <button onClick={this.save}><FaFloppyO/></button>
        </form>
      </div>
    )
  }

  renderDisplay = () => {
    return (
      <div className="note">
        <p>Learn React</p>
        <span>
          <button
            onClick={this.edit}
            id='edit'>
            <FaPencil />
          </button>
          
          <button
            onClick={this.remove}
            id='remove'>
            <FaTrash />
          </button>
        </span>
      </div>
    )
  }

  render() {
    return this.state.editing ? this.renderForm() : this.renderDisplay();
  }
}

export default Note;