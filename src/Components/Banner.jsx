import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Banner = () => {
  const [productImage, setProductImage] = useState('');

  useEffect(() => {
    axios
      .get('https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
      .then(response => {
        const randomProduct = response.data[Math.floor(Math.random() * response.data.length)];
        setProductImage(randomProduct.image_link);
      })
      .catch(error => {
        console.error('Error fetching product image:', error);
      });
  }, []);

  return (
    <div className="banner bg-light text-black text-center py-5">
      {productImage && (
        <img src={productImage} alt="Banner" className="img-fluid rounded-circle mb-4" />
      )}
      <h1 className="display-4 fst-italic">Greetings Gorgeous Ladies!</h1>
      <p className="lead">
        Shop the latest makeup products & enjoy a seamless shopping experience.
      </p>
    </div>
  );
};

export default Banner;
