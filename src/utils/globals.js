/* eslint-disable guard-for-in */
import { css, keyframes } from 'styled-components';

const fakeLogin = ({ username, password }) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === 'peter' && password === 'password') {
        resolve();
      } else {
        reject();
      }
    }, 1000);
  });

const getFetch = (apiPath, cb) => {
  fetch(`http://localhost:3001${apiPath}`, {
    method: 'GET',
    credentials: 'include',
  })
    .then(res => res.json())
    .then(res => cb(null, res))
    .catch(err => console.log('***', err));
};

const absoluteCenter = css`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
`;

const SVGNoDrag = css`
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
  user-drag: none;
`;

const ellipsis = css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const copyCat = state => JSON.parse(JSON.stringify(state));

const getChanges = (oldArray, newArray) => {
  const changes = [];
  let i;
  let item;
  let j;
  let len;

  if (JSON.stringify(oldArray) === JSON.stringify(newArray)) {
    return false;
  }

  for (i = j = 0, len = newArray.length; j < len; i = ++j) {
    item = newArray[i];
    if (JSON.stringify(item) !== JSON.stringify(oldArray[i])) {
      changes.push(item);
    }
  }
  return changes;
};

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
  SVGNoDrag,
  ellipsis,
  copyCat,
  getChanges,
  absoluteCenter,
  getFetch,
};

export default themes;
