import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import axios from 'axios';

export default function CategorySection() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get('https://makeup-api.herokuapp.com/api/v1/products.json')
      .then(response => {
        const uniqueCategories =Array.from(new Set(response.data.map(product => product.product_type)));
        setCategories(uniqueCategories);
      })
      .catch(error => {
        console.error('Error fetching product types:', error);
      });
  }, []);

 

  return (
    <div className="container">
      <div className="my-5 text-center">
        <h2>CATEGORIES</h2>
      </div>

      <div className="row">
      { categories.map((category, index) => (
   <div className="col-md-4 my-4" key={index}>
   <Link className="text-decoration-none" to={`/products/category/${category}`}>
     <Card className="shadow p-3 mb-5 bg-body-tertiary rounded" >
     {/* <Card.Img variant="top" src={product.image_link} /> */}
       <Card.Body>
         <Card.Title>{category}</Card.Title>
       </Card.Body>
     </Card>
   </Link>
 </div>
))}
</div>
</div>
)}


