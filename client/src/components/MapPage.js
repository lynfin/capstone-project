import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Box, Button } from '../styles';
import ReactMapGL from 'react-map-gl';

// changing mapStyle from mapbox://styles/mapbox/streets-v9 to
// mapbox://styles/lynfin/cl6liiz4t003114lsp9dsu8e4
function MapPage() {
  const [viewport, setViewport] = useState({
    latitude: 36.85587,
    longitude: -75.97687,
    zoom: 10,
  });
  return (
    <Wrapper>
      <ReactMapGL
        {...viewport}
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        style={{ width: 800, height: 800 }}
        mapStyle='mapbox://styles/lynfin/cl6liiz4t003114lsp9dsu8e4'
        onMove={(evt) => {
          setViewport(evt.viewState);
        }}
      >
        markers here
      </ReactMapGL>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  max-width: 800px;
  margin: 40px auto;
`;

export default MapPage;
