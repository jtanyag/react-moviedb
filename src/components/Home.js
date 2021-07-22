import React, { useEffect, useState } from 'react';
// Config
import { BACKDROP_SIZE, IMAGE_BASE_URL, POSTER_SIZE } from '../config';
// Components

// Hooks
import { useHomeFetch } from '../hooks/useHomeFetch';
// Images
import NoImage from '../images/no_image.jpg';

const Home = () => {
  const { state, loading, error } = useHomeFetch();

  return (
    <div>
      Home Page
    </div>
  )
};

export default Home;