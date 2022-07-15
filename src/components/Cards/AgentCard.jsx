import React from "react";
import _ from "lodash";
import { useDispatch } from "react-redux";
import CurrencyFormat from "react-currency-format";

const AgentCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    let cart = [];
    if (typeof window !== "undefined") {
      if (localStorage.getItem("agentcart")) {
        cart = JSON.parse(localStorage.getItem("agentcart"));
      }
      cart.push({
        ...product,
        count: 1
      });

      let unique = _.uniqWith(cart, _.isEqual);
      localStorage.setItem("agentcart", JSON.stringify(unique));

      dispatch({
        type: "ADD_TO_CART_AGENT",
        payload: unique,
      });
    }
  };

  return (
    <div class="col-xl-4 col-sm-6">
      <div class="card">
        <div class="card-body">
          <div class="row ">
            <div class="col-md-4">
              <button
                type="button"
                class="btn btn-primary"
                onClick={handleAddToCart}
                disabled={product.count < 1}
              >
                {product.count < 1 ? "Out of stock" : "Add to Cart"}
              </button>
            </div>
            <div class="col-md-8">
              <div class="">
                <h5 class="text-truncate">{product.name}</h5>
                {/* <p class="text-muted">In-Stock: {product.count}</p> */}
                <h6 class="my-0">
                  <b>
                    Unit Cost : {" "}
                    {product.amount && (
                      <CurrencyFormat
                        value={product.amount}
                        displayType="text"
                        thousandSeparator
                      />
                    )}
                  </b>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentCard;
