import React from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import CurrencyFormat from "react-currency-format";

const CartRow = ({ p }) => {
  let dispatch = useDispatch();

  const handleQuantityChange = (e) => {
    let count = e.target.value;

    if (count > p.quantity) {
      toast.error(`Max available quantity: ${p.quantity}`);
      return;
    }

    let cart = [];

    if (typeof window !== "undefined") {
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
      }

      cart.map((product, i) => {
        if (product._id == p._id) {
          cart[i].count = count;
        }
      });

      localStorage.setItem("cart", JSON.stringify(cart));
      dispatch({
        type: "ADD_TO_CART",
        payload: cart,
      });
    }
  };

  const handleRemove = () => {
    let cart = [];

    if (typeof window !== "undefined") {
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
      }
      cart.map((product, i) => {
        if (product._id === p._id) {
          cart.splice(i, 1);
        }
      });

      localStorage.setItem("cart", JSON.stringify(cart));
      dispatch({
        type: "ADD_TO_CART",
        payload: cart,
      });
    }
  };

  return (
    <>
      <tr>
        <td>
          <h5 class="font-size-14 text-truncate">
            <a href="ecommerce-product-detail.html" class="text-dark">
              {p.productname}
            </a>
          </h5>
          <p class="mb-0">
            {/* InStock : <span class="fw-medium">{p.quantity}</span> */}
          </p>
        </td>
        <td>
          {p.amount && (
            <CurrencyFormat
              value={p.amount}
              displayType="text"
              thousandSeparator
            />
          )}
        </td>
        <td>
          <div class="me-3" style={{ width: "120px" }}>
            <div class="input-group">
              <input
                type="text"
                value={p.count}
                name="demo_vertical"
                class="form-control"
                onChange={handleQuantityChange}
              />
            </div>
          </div>
        </td>
        <td>
          <CurrencyFormat
            value={p.amount * p.count}
            displayType="text"
            thousandSeparator
          />
        </td>
        <td>
          <a class="action-icon text-danger" onClick={handleRemove} style={{pointer: 'cursor'}}>
            {" "}
            <i class="bx bxs-trash-alt font-size-18"></i>
          </a>
        </td>
      </tr>
    </>
  );
};

export default CartRow;
