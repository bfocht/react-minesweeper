import React, { Component } from 'react';
import Minefield from './Minefield';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rows: 10,
      cols: 10,
      mines: 5
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    switch (e.target.id) {
      case 'rows':
        this.setState({ rows: parseInt(e.target.value, 10) });
      break;
      case 'cols':
        this.setState({ cols: parseInt(e.target.value, 10) });
      break;
      case 'mines':
        this.setState({ mines: parseInt(e.target.value, 10) });
      break;
      default:
      break;
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="col-xs-3">
          <div className="input-group">
            <div className="input-group-addon">Rows</div>
            <input type="number" className="form-control" id="rows" onChange={this.handleChange} defaultValue={this.state.rows}/>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xs-3">
              <div className="input-group">
                <div className="input-group-addon">Cols</div>
                <input type="number" className="form-control" id="cols" onChange={this.handleChange} defaultValue={this.state.cols} />
              </div>
            </div>

            <div className="col-xs-3">
              <div className="input-group">
                <div className="input-group-addon">Mines</div>
                <input type="number" className="form-control" id="mines" onChange={this.handleChange} defaultValue={this.state.mines} />
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div id="minefield" className="col-xs-12">
              <Minefield {...this.state} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
