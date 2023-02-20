import { addColorFadeAnimation, getRandomFloat } from '../../utils/utils';
import './Circle.scss';

const Circle = ({
  cellSize,
  backgroundColor1,
  backgroundColor2,
  fillColor1,
  fillColor2,
  index,
  id,
}) => {
  const circleBgAnimationName = `circle-bg-animation-${index}`;
  const circleBgStyles = {
    background: backgroundColor1,
    animationName: circleBgAnimationName,
  };

  const circleAnimationName = `circle-animation-${index}`;
  const circleStyles = {
    width: (cellSize * 0.9),
    height: (cellSize * 0.9),
    animationName: circleAnimationName,
    background: fillColor1,
  };

  const startDelay = getRandomFloat(0, 6000);
  setTimeout(() => {
    addColorFadeAnimation(circleBgAnimationName, backgroundColor1, backgroundColor2);
    addColorFadeAnimation(circleAnimationName, fillColor1, fillColor2);
  }, startDelay);

  return (
    <div className='circle-background' id={id} style={circleBgStyles}>
      <div className='circle-wrapper' style={{ width: cellSize, height: cellSize }}>
        <div className='circle' style={circleStyles}></div>
      </div>
    </div>
  );
};

export default Circle;