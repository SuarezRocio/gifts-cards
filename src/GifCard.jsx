import React, { useState, useEffect } from 'react';
import {
    GifCardWrapper,
    GifList,
    GifItem,
  } from './GifCardStyles';


const GifCard = () => {
  const [gifs, setGifs] = useState([]);
  const API_KEY = 'goWNYUQWSfY3962mtsnL6biNkRGCLYFa';
  const searchQuery = 'valorant';

  useEffect(() => {
    // Función para realizar la solicitud Fetch a la API de Giphy
    const fetchGifs = async () => {
      try {
        const response = await fetch(
          `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${searchQuery}`
        );

        if (!response.ok) {
          throw new Error('Error al obtener los datos');
        }

        const data = await response.json();
        setGifs(data.data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchGifs();
  }, []);

  return (
    <GifCardWrapper>
    <h2>GIFs de Valorant</h2>
    <GifList>
      {gifs.map((gif) => (
        <GifItem
          key={gif.id}
          src={gif.images.fixed_height.url}
          alt={gif.title}
        />
      ))}
    </GifList>
  </GifCardWrapper>
  );
};

export default GifCard;
