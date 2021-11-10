import React from 'react';
 import './App';

export default class DisplayToolbar extends React.Component {
  constructor(props) {
    super(props);
    this.onTextareaChanged = this.onTextareaChanged.bind(this);
  }

  onTextareaChanged() {
    this.Data = JSON.parse(localStorage.getItem('formula'));
    localStorage.setItem(JSON.parse('Data'))
  }

  render() {
    return (
      <div >
        <form className="displaydata">
          <textarea className="textarea" onChange={this.onTextareaChanged} value={this.props.formula.join("")} ></textarea>
          <textarea   className="textarea" id="display" rows="1" onChange={this.onTextareaChanged} value={this.props.input}></textarea>
        </form>
  
      </div>
    )
  }
}