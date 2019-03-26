import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';

const ImageList = ({ images }) => {
  const allImages = images.map(image => (
    <ImageCard key={image.id} image={image} />
  ));
  return <div className='image-list'>{allImages}</div>;
};

export default ImageList;
