import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function HeaderSection() {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    axios
      .get('https://makeup-api.herokuapp.com/api/v1/products.json?brand=beautiful')
      .then(response => {
        const bannerProducts = response.data.slice(0, 3).map(product => ({
          id: product.id,
          image_link: product.image_link,
          name: product.name,
          description: product.description,
        }));
        setBanners(bannerProducts);
      })
      .catch(error => {
        console.error('Error fetching banner products:', error);
      });
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h2 className="text-center mt-4 mb-5">Unleash Your Beauty Potential!</h2>
        </div>
      </div>

      <div className="row">
        {banners.map((product, index) => (
          <div className="col-md-4" key={index}>
            <div className="banner-card">
              <img className="banner-image" src={product.image_link} alt={product.name} />
              <div className="banner-content">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <Link to={`/products/${product.id}`} className="btn btn-primary">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
