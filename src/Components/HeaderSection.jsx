import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function HeaderSection() {
  const [banners, setBanners] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prevSlide => (prevSlide + 1) % banners.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [banners.length]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h2 className="text-center mt-4 mb-5">Unleash Your Beauty Potential!</h2>
        </div>
      </div>

      <div className="row">
        {banners.length > 0 && (
          <div className="col-md-4">
            <div className="banner-card">
              <img className="banner-image img-fluid" src={banners[currentSlide].image_link} alt={banners[currentSlide].name} />
              <div className="banner-content">
                <h3>{banners[currentSlide].name}</h3>
                <p>{banners[currentSlide].description}</p>
                <Link to={`/products/${banners[currentSlide].id}`} className="btn btn-primary">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
