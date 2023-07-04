import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import axios from "axios";
import Sidebar from "../Components/SideBar";


export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://makeup-api.herokuapp.com/api/v1/products.json")
      .then((response) => setProducts(response.data));
  }, []);

  return (

    <div className="container d-flex">
      <div className="col-md-3 me-4">
<Sidebar/>
      </div>
      <div className="col-md-9">
      <div className="my-5 text-center">
        <h1 className="fw-bold">PRODUCTS</h1>
        <p className="text-secondary">
          Voluptatibus illum, laudantium earum sit saepe dolore aperiam vitae
          ullam iusto deserunt, ipsam asperiores temporibus! Quis exercitationem
          neque porro nisi s=aepe autem?
        </p>
      </div>

      <div className="row row-cols-1 row-cols-md-3 g-4">
        {products.map((product, index) => (
          <div className="col" key={index}>
            <Link
              className="text-decoration-none"
              to={`/products/${product.id}`}
            >
              <Card className="rounded-top bg-light bg-gradient h-100">
                <Card.Body>
                  <Card.Img
                    className="img-fluid"
                    src={product.image_link}
                    alt={product.name}
                  />
                  <Card.Title className="text-center">
                    {product.name.toUpperCase()}
                  </Card.Title>
                </Card.Body>
              </Card>
            </Link>
          </div>
        ))}
      </div>
      </div>
     
    </div>
  );
}
