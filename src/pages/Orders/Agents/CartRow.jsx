import React from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import CurrencyFormat from "react-currency-format";

const CartRow = ({ p }) => {
  let dispatch = useDispatch();

  const handleQuantityChange = (e) => {
    let count = e.target.value;

    // if (count > p.count) {
    //   toast.error(`Max available quantity: ${p.count}`);
    //   return;
    // }

    let agentcart = [];

    if (typeof window !== "undefined") {
      if (localStorage.getItem("agentcart")) {
        agentcart = JSON.parse(localStorage.getItem("agentcart"));
      }

      agentcart.map((product, i) => {
        if (product._id == p._id) {
          agentcart[i].count = count;
        }
      });

      localStorage.setItem("agentcart", JSON.stringify(agentcart));
      dispatch({
        type: "ADD_TO_CART_AGENT",
        payload: agentcart,
      });
    }
  };

  const handleRemove = () => {
    let agentcart = [];

    if (typeof window !== "undefined") {
      if (localStorage.getItem("agentcart")) {
        agentcart = JSON.parse(localStorage.getItem("agentcart"));
      }
      agentcart.map((product, i) => {
        if (product._id === p._id) {
          agentcart.splice(i, 1);
        }
      });

      localStorage.setItem("agentcart", JSON.stringify(agentcart));
      dispatch({
        type: "ADD_TO_CART_AGENT",
        payload: agentcart,
      });
    }
  };

  return (
    <>
      <tr>
        <td>
          <h5 class="font-size-14 text-truncate">
            <a href="ecommerce-product-detail.html" class="text-dark">
              {p.name}
            </a>
          </h5>
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