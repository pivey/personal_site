import React from 'react';

const SplitTitle = ({ copy, role }) => (
  <span aria-label={copy} role={role}>
    {copy.split('').map((char, index) => {
      const style = {
        'animation-delay': 1 + index / 10 + 's',
        color: `#fcedd8`,
      };
      return (
        <span aria-hidden="true" key={index} style={style}>
          {char}
        </span>
      );
    })}
  </span>
);

export default SplitTitle;
