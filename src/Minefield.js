import React, { Component } from 'react';
import PropTypes from 'prop-types';

/** Requirements ***************************************************************
*  Use this component to build the minefield game using the three props given
*  (rows, cols, mines)
*
*  1. This component should return a grid based on the rows/colums.
*    * The number of rows and cols are passed in as Props from src/App.js
*    * Some CSS has already been provided in src/App.css
*    * The row can be a <div class="row"> </div>
*    * In each row you can specify a <span class="cell"> </span>
*
*  2. The content of each  cell should not be visible until the player clicks on the cell.
*    * Each cell should handle a OnClick event
*    * removing the `covered` class will make the content of cell visible
*
*  3. Mines should be randomly placed in the minefield based on the `mines` prop
*    * Mines should be generated on inital page render and when the player changes a prop
*    * react provides lifecycle methods to help with this
*    * https://facebook.github.io/react/docs/react-component.html
*
*  4. If the cell contains a mine, then the player should be notified they lost
*    * A mine can be denoted with any character such as `@`
*    * A simple alert will suffice
*
*  5. If the cell is adjacent to one or more mines, the the player should be notified how many mines are nearby
*  6. If the cell is is not adjacent to a mine, then the grid should clear until and cell to an adjacent mine is found.
*  7. If all cells except the mines are cleared then the player should be notified they won.
*  8. Right clicking on a field should set a flag
********************************************************************************/

class Minefield extends Component {
  render() {
    const mineFieldRows = [];

    return (<div>{mineFieldRows}</div>);
  }
}

Minefield.propTypes = {
  rows: PropTypes.number.isRequired,
  cols: PropTypes.number.isRequired,
  mines: PropTypes.number.isRequired
};

export default Minefield;
