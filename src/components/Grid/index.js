import React from 'react';
// Styles
import { Content, Wrapper } from '../Grid/Grid.styles';

const Grid = ({ header, children }) => (
  <Wrapper>
    <h1>{header}</h1>
    <Content>{children}</Content>
  </Wrapper>
);

export default Grid;