import Square from "../Square/Square";
import Circle from "../Circle/Circle";
import Triangle from "../Triangle/Triangle";
import { getRandom, getRandomColorCss } from "../../utils/utils";

const Shape = ({
  cellSize,
  index
}) => {

  // const [dummyValue, setDummyValue] = useState(0);
  // const forceRedrawShape = () => {
  //   document.getElementById(`shape${index}`).classList.add("fadeOut");
  //   setTimeout(() => {
  //     setDummyValue(dummyValue + 1);
  //   }, 3000)
  // };

  const renderShape = () => {
    const props = {
      cellSize: cellSize,
      backgroundColor1: getRandomColorCss(),
      backgroundColor2: getRandomColorCss(),
      fillColor1: getRandomColorCss(),
      fillColor2: getRandomColorCss(),
      index: index
    };

    // const redrawPeriod = getRandom(10, 30) * 1000;
    // setTimeout(() => {
    //   forceRedrawShape();
    // }, redrawPeriod);

    const shapes = [Circle, Triangle, Square];
    const ShapeToDraw = shapes[getRandom(0, 2)];
    return (
      <ShapeToDraw id={`shape${index}`} key={`shape${index}`} {...props} />
    );
  };

  const shapeStyle = {
    width: cellSize,
    height: cellSize,
  };

  return (
    <div id={`shape${index}-parent`} className="Shape" style={shapeStyle}>
      {renderShape()}
    </div>
  );
};

export default Shape;