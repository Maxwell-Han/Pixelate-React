// We'll dive deeper into middleware later.
// For now, it's enough to know that this loggerMiddleware prints out useful
// information about everything that happens in your store.
// Much like requests in express pass from middleware to middleware, actions in redux
// pass from middleware to middleware. The loggerMiddleware gets a chance to see
// actions before they are processed. They get in the middle, hence, middleware.
import { createStore, applyMiddleware } from "redux";
import loggerMiddleware from "redux-logger";

// We'll soon revisit the initial state of this application.
const initialState = {
  grid: [Array(20).fill("")],
  color: "red"
};

// ACTION TYPES
/* we'll add some action types soon */
const RowCreator = "ROW_CREATOR";
const ColorCreator = "COLOR_CREATOR";
const DrawCreator = "DRAW_CREATOR";

// ACTION CREATORS
/* we'll also add the corresponding action creators */
export const rowCreatorFunc = () => ({ type: RowCreator });
export const colorCreatorFunc = newColor => ({
  type: ColorCreator,
  color: newColor
});
export const drawCreatorFunc = (row, col) => ({
  type: DrawCreator,
  row: row,
  col: col
});

// And we'll revisit this reducer.
function reducer(state = initialState, action) {
  switch (action.type) {
    case RowCreator:
      return { ...state, grid: [...state.grid, Array(20).fill("")] };
    case ColorCreator:
      return { ...state, color: action.color };
    case DrawCreator:
      const newGrid = [...state.grid];
      newGrid[action.row] = [...newGrid[action.row]];
      newGrid[action.row][action.col] = state.color;
      return { ...state, grid: newGrid };

    default:
      return state;
  }
}

const store = createStore(reducer, applyMiddleware(loggerMiddleware));

export default store;
