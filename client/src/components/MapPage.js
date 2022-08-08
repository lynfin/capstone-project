import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Box, Button } from '../styles';

function MapPage() {
  return (
    <Wrapper>
      <h1>...map here...</h1>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  max-width: 800px;
  margin: 40px auto;
`;

export default MapPage;
