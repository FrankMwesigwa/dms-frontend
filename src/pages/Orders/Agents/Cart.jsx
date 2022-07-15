import React, { useState } from "react";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import CurrencyFormat from "react-currency-format";
import { Link, useHistory } from "react-router-dom";
import API from "../../../helpers/api";
import CartRow from "./CartRow";

const Cart = () => {
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  const user = JSON.parse(localStorage.getItem("user"));
  const { agent } = useSelector((state) => ({ ...state }));

  const getTotal = () => {
    return agent.reduce((currentValue, nextValue) => {
      return currentValue + nextValue.count * nextValue.amount;
    }, 0);
  };

  const saveOrderToDb = async (e) => {
    e.preventDefault();
    setLoading(true);

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.accessToken}`,
      },
    };

    try {
      const res = await API.post("/agent/cart", { agent, cartTotal: getTotal() }, config);
      console.log("Cart Response ====>", res)
      setLoading(false);
      if (res.data.ok) {
        history.push("/agent/cart/summary")
        toast.success(`Agent Cart has been created successfully`);
      };
     
    } catch (error) {
      setLoading(false);
      toast.error("Error while Creating Order");
      console.log(error)
    }
  };

  return (
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="d-sm-flex align-items-center justify-content-between">
            <h4 class="mb-3 font-size-18">
              Agent Cart Orders - {agent.length} Items in Order
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
                      <th>Unit Cost</th>
                      <th>Quantity</th>
                      <th colspan="2">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {agent.map((p) => (
                      <CartRow key={p._id} p={p} />
                    ))}
                  </tbody>
                </table>
              </div>
              <div class="row mt-4">
                <div class="col-sm-6">
                  <Link to="/orders/agents" class="btn btn-secondary">
                    <i class="mdi mdi-arrow-left me-1"></i> Back{" "}
                  </Link>
                </div>
                <div class="col-sm-6">
                  <div class="text-sm-end mt-2 mt-sm-0">
                    <Link class="btn btn-success" onClick={saveOrderToDb}>
                      <i class="mdi mdi-cart-arrow-right me-1"></i> Check Out{" "}
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
                        {agent.map((c, i) => (
                          <div key={i}>
                            <p>
                              {c.name} x {c.count} ={" "}
                              <CurrencyFormat
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
                        Grand Total : UGX{" "}
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
