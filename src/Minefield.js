import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Use this component to build the minefield game
// 1. It should return a grid based on the rows/cols props in the render function.
// 2. Each cell should handle a click event
// 3. If the cell contains a mine, then the player should be notified they lost
// 4. If the cell is adjacent to one or more mines, the the player should be notified how many mines are nearby
// 5. If the cell is is not adjacent to a mine, then the grid should clear until and cell to an adjacent mine is found.
// 6. If all cells except the mines are cleared then the player should be notified they won.
// 7. Bonus: right clicking on a field should set a flag

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
