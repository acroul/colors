export const getRenderBreakpointOptions = (windowWidth) => {
  const XL_BREAKPOINT_OPTIONS = {
    CELL_SIZE: 140,
    CANVAS_PADDING: 0.1,
  };
  const LG_BREAKPOINT_OPTIONS = {
    CELL_SIZE: 120,
    CANVAS_PADDING: 0.1,
  };
  const MD_BREAKPOINT_OPTIONS = {
    CELL_SIZE: 100,
    CANVAS_PADDING: 0.1,
  };
  const SM_BREAKPOINT_OPTIONS = {
    CELL_SIZE: 75,
    CANVAS_PADDING: 0.05,
  };

  if (windowWidth >= 1600) {
    return XL_BREAKPOINT_OPTIONS;
  } else if (windowWidth >= 1200) {
    return LG_BREAKPOINT_OPTIONS;
  } else if (windowWidth >= 700) {
    return MD_BREAKPOINT_OPTIONS;
  }
  return SM_BREAKPOINT_OPTIONS;
};

export const getRandom = (min, max) => {
  return Math.floor(min + Math.random() * (max + 1 - min));
};

export const getRandomFloat = (min, max) => {
  return min + Math.random() * (max + 1 - min);
};

export const getRandomColorCss = () => {
  const r = getRandom(0, 255);
  const g = getRandom(0, 255);
  const b = getRandom(0, 255);
  return `rgba(${r}, ${g}, ${b}, 1.0)`;
};

export const addKeyframesToDOM = (keyframes) => {
  const head = document.getElementsByTagName('head')[0];
  let style = document.createElement('style');
  style.innerHTML = keyframes;
  head.appendChild(style);
};

export const addColorFadeAnimation = (name, color1, color2) => {
  addKeyframesToDOM(`
    @keyframes ${name} {
      0% { background-color: ${color1}; }
      50% { background-color: ${color2}; }
      100% { background-color: ${color1}; }
    }
  `);
};