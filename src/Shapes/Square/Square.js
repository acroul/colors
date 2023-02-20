import './Square.css';
import { addColorFadeAnimation, getRandomFloat } from '../../utils/utils';

const Square = ({
  cellSize,
  backgroundColor1,
  backgroundColor2,
  fillColor1,
  fillColor2,
  index,
  id,
}) => {

  const squareAnimationName = `square-animation-${index}`;
  const squareStyles = {
    width: (cellSize),
    height: (cellSize),
    animationName: squareAnimationName,
    background: fillColor1,
  };

  const startDelay = getRandomFloat(0, 6000); 
  setTimeout(() => {
    addColorFadeAnimation(squareAnimationName, fillColor1, fillColor2);
  }, startDelay);

  return (
    <div className='square' id={id} style={squareStyles}>
    </div>
  );
};

export default Square;