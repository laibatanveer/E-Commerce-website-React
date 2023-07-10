import { useState } from "react";
import { Offcanvas, Badge } from "react-bootstrap";
import { RiShoppingCartLine } from "react-icons/ri";

export default function Cart() {
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);
  
    const addToCart = (product) => {
      setCartItems([...cartItems, product]);
    };
  
    const removeFromCart = (product) => {
      const updatedCartItems = cartItems.filter((item) => item.id !== product.id);
      setCartItems(updatedCartItems);
    };
  
    const calculateTotalAmount = () => {
      return cartItems.reduce((total, item) => total + item.price, 0);
    };
  
    const openCart = () => {
      setShowCart(true);
    };
  
    const closeCart = () => {
      setShowCart(false);
    };
  return (
    <>
    <Offcanvas show={showCart} onHide={closeCart} placement="end">
    <Offcanvas.Header closeButton>
      <Offcanvas.Title>
        <RiShoppingCartLine className="me-2" />
        My Cart{" "}
        <Badge pill bg="primary">
          {cartItems.length}
        </Badge>
      </Offcanvas.Title>
    </Offcanvas.Header>
    <Offcanvas.Body>
      {cartItems.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="d-flex align-items-center mb-2">
              <div>
                <img
                  src={item.image}
                  alt={item.name}
                  width="50"
                  height="50"
                />
              </div>
              <div className="ms-2">
                <p>{item.name}</p>
                <p>${item.price}</p>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => removeFromCart(item)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <hr />
          <p>Total: ${calculateTotalAmount()}</p>
          <button className="btn btn-success">Checkout</button>
        </div>
      )}
    </Offcanvas.Body>
  </Offcanvas>
</>
);
}
