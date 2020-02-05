import React from "react";
import store, { colorCreatorFunc } from "../store";

class TableCell extends React.Component {
  constructor() {
    super(props);
    this.handleDraw = this.handleDraw.bind(this);
  }
  handleDraw(event, rowIdx, colIdx) {
    store.dispatch(drawCreatorFunc(rowIdx, colIdx));
  }

  render() {
    return (
      <td
        key={colIdx}
        onClick={handleDraw}
        className={this.props.col}
      ></td>
    );
  }
}

export default TableCell;

// const TableCell = (props) => {
//   const colIdx = props.colIdx
//   const rowIdx = props.rowIdx
//   return (
//     <td
//       key={colIdx}
//       onClick={() => prop.handleDraw(event, rowIdx, colIdx)}
//       className={grid[rowIdx][colIdx]}
//     ></td>
//   );
// };
