/* eslint-disable guard-for-in */
import { css, keyframes } from 'styled-components';

const textBorder = (textColor, borderColor) => `
  color: ${textColor};
  text-shadow: -2px 0 ${borderColor}, 0 2px ${borderColor}, 2px 0 ${borderColor}, 0 -2px ${borderColor};
`;

const objSize = obj => Object.keys(obj).length;

const transAll = time => `
    -webkit-transition: all ${time}s ease;
    -moz-transition: all ${time}s ease;
    -o-transition: all ${time}s ease;
    transition: all ${time}s ease;
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
`;

const moveY = keyframes`
0% {
    transform: translateY(-140vh);
  }
100% {
    transform: translateY(90vh);
  }
}
`;

const ErrorOpacity = keyframes`
0% {
    opacity:0;
  }
  25% {
    opacity:1
  }
  50% {
    opacity:1
  }
  75% {
    opacity:1
  }
  100% {
    opacity:0;
  }
}
`;

const backgroundProvider = icon => `
    background: url(${icon});
    background-size: cover;
    background-position: 50% 50%;
    background-color: transparent;
    background-repeat: no-repeat;
    `;

const backgroundOptions = () => `
    background-size: cover;
    background-position: 50% 50%;
    background-color: transparent;
    background-repeat: no-repeat;
    `;

const noSelect = css`
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                              supported by Chrome, Opera and Firefox */
`;

const flex = (justify, align, direction = 'row') => `
    display:flex;
    flex-direction:${direction};
    justify-content:${justify};
    align-items:${align};`;

const themes = {
  noSelect,
  flex,
  fadeIn,
  backgroundProvider,
  backgroundOptions,
  moveY,
  ErrorOpacity,
  textBorder,
  transAll,
  objSize,
};

export default themes;
