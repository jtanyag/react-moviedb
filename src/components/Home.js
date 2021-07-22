import React, { useEffect, useState } from 'react';
// Config
import { BACKDROP_SIZE, IMAGE_BASE_URL, POSTER_SIZE } from '../config';
// Components
import HeroImage from './HeroImage';
// Hooks
import { useHomeFetch } from '../hooks/useHomeFetch';
// Images
import NoImage from '../images/no_image.jpg';

const Home = () => {
  const { state, loading, error } = useHomeFetch();

  return (
    <>
      {state.results[0] ? (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
          title={state.results[0].original_title}
          text={state.results[0].overview}
        />
      ) : null}
    </>
  );
};

export default Home;