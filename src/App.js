import React, { Component } from 'react';
import Minefield from './Minefield';
import logo from './logo.svg';
import './App.css';

/** Notes **********************************************************************
*  Minesweeper is a single-player puzzle video game. The objective of the
*  game is to clear a rectangular board (minefield) containing hidden "mines" or
*  bombs without detonating any of them, with help from clues about the number of
*  neighboring mines in each field.
*  https://en.wikipedia.org/wiki/Minesweeper_(video_game)
*
*  This is the main application.   You should not need to modify this component
*  as it renders the Minefield component.  The requirements of the game are in
*  the src/Minefield source.
*
*********************************************************************************/

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
