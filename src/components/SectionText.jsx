import React from 'react';
import styled from 'styled-components';
import replace from 'react-string-replace';
import { device } from '../utils/themes';

const Container = styled.div`
  line-height: 2.5rem;
  font-size: 1.5rem;
  height: auto;
  width: auto;
  padding-bottom: 3rem;
  color: ${props => props.theme.color};
  @media ${device.belowMobileL} {
    font-size: 1.2rem;
    line-height: 2rem;
    text-align: left;
  }
`;

const SectionText = props => {
  const reg = /\{([a-z|A-Z|0-9|\.]+)\}/g;
  var output = replace(props.markdown, reg, prop => props.replacements[prop]);

  return <Container>{output}</Container>;
};

export default SectionText;
