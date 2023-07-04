import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BiCategory } from "react-icons/bi";

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
      className="shadow p-3 mt-4 bg-body-tertiary rounded h-80 "
      style={{
        backgroundColor: "#F7FBEF",
        padding: "6vh",
        paddingLeft: "8vh",
        borderRadius: "44% 44% 44% 44% / 38% 38% 38% 38%",
      }}
    >
      <h2
        style={{
          color: "black",
          fontSize: "20px",
          marginBottom: "16px",
          fontFamily: "Oswald",
        }}
      >
        <BiCategory style={{ marginRight: "8px" }} />
        Categories
      </h2>
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          fontFamily: "Oswald",
        }}
      >
        {productTypes.map((type, index) => (
          <li
            key={index}
            style={{
              color: "black",
              fontSize: "100%",
              padding: "5vh 12vh",
              margin: "0, auto"
            }}
          >
            <Link
              to={`/products/category/${type}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              {type}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
