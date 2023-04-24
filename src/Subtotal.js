import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider.js"
import { getBasketTotal } from "./Reducer";

function SubTotal(){
  const [ {basket}, dispatch] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (<>
            <p> Subtotal ({basket.length} items): <strong> {value} </strong></p>
            <small className="subtotal__gift"><input type="checkbox"/> This Order Contains a gift </small>
        </>)}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />
      <button> Procced to CheckOut </button>
    </div>
  );
}

export default SubTotal;