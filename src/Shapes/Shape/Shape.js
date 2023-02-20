import Square from "../Square/Square";
import Circle from "../Circle/Circle";
import Triangle from "../Triangle/Triangle";
import { getRandom, getRandomColorCss } from "../../utils/utils";

const Shape = ({
  cellSize,
  index
}) => {
  const renderShape = () => {
    const shapeProps = {
      cellSize: cellSize,
      backgroundColor1: getRandomColorCss(),
      backgroundColor2: getRandomColorCss(),
      fillColor1: getRandomColorCss(),
      fillColor2: getRandomColorCss(),
      index: index
    };

    const shapes = [Circle, Triangle, Square];
    const ShapeToDraw = shapes[getRandom(0, 2)];
  
    return (
      <ShapeToDraw id={`shape${index}`} key={`shape${index}`} {...shapeProps} />
    );
  };

  const shapeStyle = {
    width: cellSize,
    height: cellSize,
  };

  return (
    <div id={`shape${index}-parent`} style={shapeStyle}>
      {renderShape()}
    </div>
  );
};

export default Shape;