import { useState } from "react";
import Shape from "../Shapes/Shape/Shape";
import { getRenderBreakpointOptions } from "../utils/utils";
import "./Canvas.scss";

const Canvas = () => {
  const [shapes, setShapes] = useState([]);

  const WINDOW_WIDTH = window.innerWidth;
  const WINDOW_HEIGHT = window.innerHeight;

  // Determine how many rows and cols to draw, and the cell size
  const options = getRenderBreakpointOptions(WINDOW_WIDTH);
  const MAX_CANVAS_HEIGHT = (WINDOW_HEIGHT * (1 - options.CANVAS_PADDING));
  const MAX_CANVAS_WIDTH = (WINDOW_WIDTH * (1 - options.CANVAS_PADDING));
  const NUM_ROWS = Math.floor(MAX_CANVAS_HEIGHT / options.CELL_SIZE);
  const NUM_COLS = Math.floor(MAX_CANVAS_WIDTH / options.CELL_SIZE);

  const CELL_SIZE = Math.min((MAX_CANVAS_HEIGHT / NUM_ROWS), (MAX_CANVAS_WIDTH / NUM_COLS));
  const CANVAS_WIDTH = (CELL_SIZE * NUM_COLS);
  const CANVAS_HEIGHT = (CELL_SIZE * NUM_ROWS);

  const canvasStyles = {
    width: CANVAS_WIDTH,
    height: CANVAS_HEIGHT
  };

  const drawShapes = () => {
    const shapesArray = Array(NUM_ROWS * NUM_COLS).fill();
    return shapesArray.map((item, i) => (
      <Shape key={i} id={i} cellSize={CELL_SIZE} index={i} />
    ));
  };

  if (!shapes || shapes.length === 0) {
    setShapes(drawShapes());
  }

  return (
    <div className="CanvasContainer">
      <div className="Canvas" style={canvasStyles}>    
        { shapes }
      </div>
    </div>
  );
};

export default Canvas;