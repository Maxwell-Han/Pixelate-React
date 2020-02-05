import React, { Component } from "react";
import TableRow from './TableRow.jsx'

const Table = props => {
  const grid = props.grid
  const handleDraw = props.handleDraw

  return (
    <table>
      <tbody>
      {grid.map((row, rowIdx) => {
        <TableRow key={rowIdx} row={row} rowIdx={rowIdx} handleDraw={handleDraw} />
      })}
      </tbody>
    </table>
  );
};

export default Table;
