import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal.js";
import CheckoutProduct from "./CheckoutProduct.js"
import { useStateValue } from "./StateProvider.js"

function Checkout() {
  const [ {basket, user}, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img className="checkout_ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />
        <div>
          <h3>Hello {user?.email}</h3>
          <h2 className="checkout__title">CheckoutYour Shopping Cart</h2>
          {basket.map(item => (
            <CheckoutProduct
              id = {item.id}
              title = {item.title}
              image = {item.image}
              price = {item.price}
              rating = {item.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <h1>Total</h1>
        <Subtotal></Subtotal>
      </div>
    </div>
  );
}

export default Checkout;
