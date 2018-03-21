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
      <div className="App fluid-container">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <FormGroup controlId="formControlIsTextarea">
              <FormControl componentClass="textarea" style={{ height: '670px'}} placeholder="Type in your markdown" value={markdown} onChange={ (event) => this.updateMarkDown(event.target.value) }></FormControl>
            </FormGroup>
          </div>
          <div className="col-lg-6 col-md-6" style = {{ textAlign: 'left', fontFamily: 'Montserrat' }}>
            <div dangerouslySetInnerHTML = {{ __html : marked(markdown) }}></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
