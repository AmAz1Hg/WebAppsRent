import React from 'react';
import Container from 'react-bootstrap/Container';
import Agency from './agency';

const BackgroundImageContainer = () => {
  const backgroundImageUrl = 'url(https://vsegda-pomnim.com/uploads/posts/2022-04/1649325081_49-vsegda-pomnim-com-p-plyazhi-ruminii-foto-58.jpg)'; // Замените на URL вашей картинки

  const containerStyle = {
    backgroundImage: backgroundImageUrl,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh', // Высота контейнера, чтобы заполнить весь экран
  };

  return (
    <Container fluid style={containerStyle}>
        <Agency/> 
    </Container>
  );
}

export default BackgroundImageContainer;