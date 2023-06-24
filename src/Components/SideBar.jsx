import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [productTypes, setProductTypes] = useState([]);

  useEffect(() => {
    fetch("https://makeup-api.herokuapp.com/api/v1/products.json")
      .then((response) => response.json())
      .then((data) => {
        const types = [...new Set(data.map((product) => product.product_type))];
        setProductTypes(types);
      })
      .catch((error) => {
        console.error("Error fetching product types:", error);
      });
  }, []);

  return (
    <aside
    className="shadow p-3 mb-5 bg-body-tertiary rounded"
      style={{
        backgroundColor: "#F7FBEF",
        padding: "6vh",
        paddingLeft: "8vh",
        borderRadius: "44% 44% 44% 44% / 38% 38% 38% 38%  ",
      }}
    >
      <h2 style={{ color: "black", fontSize: "20px", marginBottom: "16px" }}>
        {" "}
        .Catgories
      </h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {productTypes.map((type, index) => (
          <li
            key={index}
            style={{
              color: "black",
              fontSize: "12px",
              fontFamily: "Oswald",

              padding: "8px 12px",
            }}
          >
            <Link to={`/products/category/${type}`}>{type}</Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
