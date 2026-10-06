import React, { useReducer } from 'react'
import { cartReducer, initialState } from '../cart/cartReducer'
import './Cart.css'
import { MdDelete } from "react-icons/md";

const cart = ({ state, dispatch }) => {
  //const [state, dispatch] = useReducer(cartReducer, initialState)

  console.log(state)
  return (
 <div className='cartContainer'>

      <h3>Shopping Cart</h3>

      {state.cart.map((p) => (
        <div className="cartItem" key={p.prodID}>

          <img src={p.thumbnail} alt={p.title} />

          <div className="cartDetails">

            <h5>{p.title}</h5>

            <p>Price: ₹{p.price}</p>

            <div className="quantityControl">

              <button
                onClick={() =>
                  dispatch({
                    type: "IncreaseQuantity",
                    payload: p
                  })
                }
              >
                +
              </button>

              <p>Quantity: {p.quantity}</p>

              <button
                onClick={() =>
                  dispatch({
                    type: "DecreaseQuantity",
                    payload: p
                  })
                }
              >
                -
              </button>

              <button
                onClick={() =>
                  dispatch({
                    type: "RemoveFromCart",
                    payload: p
                  })
                }
              >
                <MdDelete />

              </button>

            </div>

            <div className="cartPrice">
              ₹{p.price * p.quantity}
            </div>

          </div>

        </div>
      ))}

      <div className="cartSummary">

        <h3>Total Amount</h3>

        <div className="totalAmount">
          ₹{state.totalAmount}
        </div>

        <button className="checkout-btn">
          Proceed to Checkout
        </button>

      </div>

    </div>
  )
}

export default cart



