import React from "react";
import TableCell from "./TableCell.jsx";

const TableRow = props => {
  const row = props.row;
  const rowIdx = props.rowIdx;
  const handleDraw = props.handleDraw;

  return (
    <tr>
      {row.map((col, colIdx) => (
        <TableCell key={colIdx} col={col} colIdx={colIdx} rowIdx={rowIdx} handleDraw={handleDraw} />
      ))}
    </tr>
  );
};

export default TableRow;
