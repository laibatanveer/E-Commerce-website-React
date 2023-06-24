import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import axios from 'axios';

export default function CategoryPage() {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(`https://makeup-api.herokuapp.com/api/v1/products.json?product_type=${categoryName}`)
      .then(response => setProducts(response.data))
      .catch(error => {
        console.error('Error fetching products:', error);
        setProducts([]);
      });
  }, [categoryName]);

  return (
    <div className="container">
      <div className="my-5 text-center">
        <h1>{categoryName.toUpperCase()}</h1>
        <p className="text-secondary">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat, officia nihil! Nemo sunt reprehenderit voluptates amet itaque libero in unde, molestias illo veniam, dolore veritatis eaque ipsum. Molestiae, nam architecto!</p>
      </div>

      <div  className="row justify-content-center">
        {products.map((product, index) => (
          <div className="col-md-6 my-4" key={index}>
            <Link className='text-decoration-none' to={`/products/${product.id}`}>
              <Card className='shadow-sm p-3 mb-5 bg-body-tertiary rounded card h-100'>
                <Card.Img variant="top" src={product.image_link} />
                <Card.Body>
                  <Card.Title>{product.name} - {product.price}$</Card.Title>
                  <Card.Text>{product.description}, {product.rating}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
