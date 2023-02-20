import './Triangle.css';
import {
  addColorFadeAnimation,
  addKeyframesToDOM,
  getRandomFloat
} from '../../utils/utils';

const Triangle = ({
  cellSize,
  backgroundColor1,
  backgroundColor2,
  fillColor1,
  fillColor2,
  index,
  id,
}) => {

  const triangleSize = (cellSize * 0.85);

  // Triangle Background
  const triangleBgAnimationName = `triangle-bg-animation-${index}`;
  const triangleBgStyle = {
    animationName: triangleBgAnimationName,
    width: cellSize,
    height: cellSize,
    background: backgroundColor1,
  };

  // Triangle Wrapper
  const triangleWrapperStyle = {
    width: triangleSize,
    height: triangleSize,
  };
  
  // Triangle
  const triangleAnimationName = `triangle-animation-${index}`;
  const triangleStyle = {
    animationName: triangleAnimationName,
    'borderLeft': `solid ${triangleSize / 2}px transparent`,
    'borderRight': `solid ${triangleSize / 2}px transparent`,
    'borderBottom': `solid ${triangleSize}px`,
    'border-bottom-color': fillColor1,
  };

  // Add animations
  const startDelay = getRandomFloat(0, 6000);
  setTimeout(() => {
    addColorFadeAnimation(triangleBgAnimationName, backgroundColor1, backgroundColor2);
    addKeyframesToDOM(`
      @keyframes ${triangleAnimationName} {
        0% { border-bottom-color: ${fillColor1}; }
        50% { border-bottom-color: ${fillColor2}; }
        100% { border-bottom-color: ${fillColor1}; }
      }
    `);
  }, startDelay);

  return (
    <div className="triangle-background" id={id} style={triangleBgStyle}>
      <div className="triangle-wrapper" style={triangleWrapperStyle}>
        <div className="triangle" style={triangleStyle}></div>
      </div>
    </div>
  );
};

export default Triangle;
