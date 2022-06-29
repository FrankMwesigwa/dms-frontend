import React from "react";
import _ from "lodash";
import { useDispatch } from "react-redux";
import CurrencyFormat from "react-currency-format";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    let cart = [];
    if (typeof window !== "undefined") {
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
      }
      cart.push({
        ...product,
        count: 1,
      });

      let unique = _.uniqWith(cart, _.isEqual);
      localStorage.setItem("cart", JSON.stringify(unique));

      dispatch({
        type: "ADD_TO_CART",
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
                disabled={product.quantity < 1}
              >
                {product.quantity < 1 ? "Out of stock" : "Add to Cart"}
              </button>
            </div>
            <div class="col-md-8">
              <div class="">
                <h5 class="text-truncate">{product.productname}</h5>
                <p class="text-muted">In-Stock: {product.quantity}</p>
                <h5 class="my-0">
                  <b>
                    UGX{" "}
                    {product.amount && (
                      <CurrencyFormat
                        value={product.amount}
                        displayType="text"
                        thousandSeparator
                      />
                    )}
                  </b>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
