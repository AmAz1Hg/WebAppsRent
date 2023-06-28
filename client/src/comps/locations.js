
import React from 'react';

const LocationComponent = () => {
  const locationUrl = 'https://www.google.com/maps/place/Strada+Mercur+23-17,+Constanța+900178,+Румыния/@44.1776409,28.6399426,17z/data=!3m1!4b1!4m6!3m5!1s0x40bae5377e1530a7:0xc15a03a9ebe1e5f6!8m2!3d44.1776409!4d28.6425175!16s%2Fg%2F11c2txb70l?entry=ttu'; // Замените на ваш адрес местоположения

  return (
    <div>
      <a style={{color: 'black'}} href={locationUrl}>Место на карте</a>
     
    </div>
  );
}

export default LocationComponent;

