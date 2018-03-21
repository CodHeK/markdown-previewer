import React, { Component } from 'react';
import './App.css';
import FormGroup from 'react-bootstrap/lib/FormGroup'
import FormControl from 'react-bootstrap/lib/FormControl'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'

let marked = require('marked');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown : ""
    }
  }

  updateMarkDown(markdown) {
    this.setState({ markdown: markdown });
  }

  render() {
    let { markdown } = this.state;
    console.log(markdown);
    return (
      <div className="App container">
        <div>
          <FormGroup controlId="formControlIsTextarea">
            <ControlLabel>Markdown Input</ControlLabel>
            <FormControl componentClass="textarea" placeholder="Type in your markdown" value={markdown} onChange={ (event) => this.updateMarkDown(event.target.value) }></FormControl>
          </FormGroup>
        </div>
        <div>
          <h1>Markdown Output</h1>
          <div dangerouslySetInnerHTML = {{ __html : marked(markdown) }}>
            
          </div>
        </div>
      </div>
    );
  }
}

export default App;
