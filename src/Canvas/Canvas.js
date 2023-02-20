import "./Canvas.css";
import Shape from "../Shapes/Shape/Shape";

const Canvas = () => {
  const NUM_ROWS = 6;
  const NUM_COLS = 13;

  const WINDOW_HEIGHT = window.innerHeight;
  const CANVAS_HEIGHT = (WINDOW_HEIGHT * 0.9);
  const CELL_SIZE = (CANVAS_HEIGHT / NUM_ROWS);
  const CANVAS_WIDTH = (CELL_SIZE * NUM_COLS);

  const canvasStyles = {
    width: CANVAS_WIDTH,
    height: CANVAS_HEIGHT
  };

  const drawShapes = () => {
    const shapesArray = Array.from(Array(NUM_ROWS * NUM_COLS))
    return shapesArray.map((item, i) => (
      <Shape key={i} id={i} cellSize={CELL_SIZE} index={i} />
    ));
  };

  return (
    <div className="CanvasContainer">
      <div className="Canvas" style={canvasStyles}>    
        { drawShapes() }
      </div>
    </div>
  );
};

export default Canvas;
