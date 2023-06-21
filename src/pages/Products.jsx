import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { FaStream } from "react-icons/fa";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => setProducts(response.data.products));
  }, []);

  return (
    <div className="container">
      <div className="my-5 text-center">
        <h1 className="fw-bold fst-italic">
          <FaStream /> PRODUCTS
        </h1>
        <p className="text-secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          illum, laudantium earum sit saepe dolore aperiam vitae ullam iusto
          deserunt, ipsam asperiores temporibus! Quis exercitationem neque porro
          nisi saepe autem?
        </p>
      </div>

      <div className="row">
        {products.map((product, index) => (
          <div className="col-md-4 my-3" key={index}>
            <Link
              className="text-decoration-none"
              to={`/products/${product.id}`}
            >
              <Card className="rounded-top bg-light bg-gradient">
                <Card.Body>
                  <Card.Img
                    className="img-fluid"
                    src={product.image}
                    alt={product.title}
                  />
                  <Card.Title className="text-center">
                   {product.title.toUpperCase().replace("-", " ")}
                  </Card.Title>
                </Card.Body>
              </Card>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
