import React from "react";
import CurrencyFormat from "react-currency-format";

const ProductCard = ({ product }) => {
  return (
    <div class="col-xl-4 col-sm-6">
      <div class="card">
        <div class="card-body">
          <div class="row ">
            <div class="col-md-4">
              <div class="flex-shrink-0 align-self-center">
                <div class="mini-stat-icon avatar-sm rounded-circle bg-primary">
                  <span class="avatar-title">
                    <i class="bx bx-copy-alt font-size-24"></i>
                  </span>
                </div>
              </div>
            </div>
            <div class="col-md-8">
              <div class="">
                <h5 class="text-truncate">{product.name}</h5>
                <p class="text-muted">In-Stock: {product.count}</p>
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
