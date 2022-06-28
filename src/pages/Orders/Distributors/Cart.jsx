import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import CurrencyFormat from "react-currency-format";
import CartRow from "./CartRow";

const Cart = () => {
  const { cart } = useSelector((state) => ({ ...state }));

  const getTotal = () => {
    return cart.reduce((currentValue, nextValue) => {
      return currentValue + nextValue.count * nextValue.amount;
    }, 0);
  };

  return (
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="d-sm-flex align-items-center justify-content-between">
            <h4 class="mb-3 font-size-18">
              Distributor Cart Orders - {cart.length} Items in Order
            </h4>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xl-8">
          <div class="card">
            <div class="card-body">
              <div class="table-responsive">
                <table class="table align-middle mb-0 table-nowrap">
                  <thead class="table-light">
                    <tr>
                      <th>Product Desc</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th colspan="2">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((p) => (
                      <CartRow key={p._id} p={p} />
                    ))}
                  </tbody>
                </table>
              </div>
              <div class="row mt-4">
                <div class="col-sm-6">
                  <Link to="/orders/distributors" class="btn btn-secondary">
                    <i class="mdi mdi-arrow-left me-1"></i> Continue Shopping{" "}
                  </Link>
                </div>
                <div class="col-sm-6">
                  <div class="text-sm-end mt-2 mt-sm-0">
                    <Link to="/orders/checkout" class="btn btn-success">
                      <i class="mdi mdi-cart-arrow-right me-1"></i> Checkout{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title mb-3">Order Summary</h4>
              <div class="table-responsive">
                <table class="table mb-0">
                  <tbody>
                    <tr>
                      <td>
                        {cart.map((c, i) => (
                          <div key={i}>
                            <p>
                              {c.productname} x {c.count} = <CurrencyFormat
                            value={c.amount * c.count}
                            displayType="text"
                            thousandSeparator
                          />
                            </p>
                          </div>
                        ))}
                      </td>
                    </tr>
                    <tr>
                      <th>
                        Total : UGX{" "}
                        {
                          <CurrencyFormat
                            value={getTotal()}
                            displayType="text"
                            thousandSeparator
                          />
                        }
                      </th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
