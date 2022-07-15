import React, { useState, useEffect } from "react";
import moment from "moment";
import API from "../../../../helpers/api";
import CurrencyFormat from "react-currency-format";
import LoadSpinner from "../../../../components/Spinner";
// import Product from "./ProductCard";

const AgentStock = () => {
  const [agentprods, setAgentProds] = useState([]);
  const [loading, setLoading] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));

  const loadDistProds = async () => {
    setLoading(true);
    try {
      const res = await API.get("/agent/order");
      console.log("Admin Agents Products Backend ===>", res);
      setAgentProds(res.data);
      setLoading(false);
    } catch (error) {
      console.log("error", error);
      setLoading(false);
    }
  };

  const showOrderInTable = (order) => (
    <div class="table-responsive">
      <table class="table table-bordered">
        <thead class="table-light">
          <tr>
            <th class="">Product Name</th>
            <th class="">Available Stock</th>
            <th class="">Unit Cost</th>
          </tr>
        </thead>

        <tbody>
          {order.products.map((p, i) => (
            <tr key={i}>
              <td>
                <b>{p.name}</b>
              </td>
              <td>{p.count}</td>
              <td>
                <CurrencyFormat
                  value={p.amount}
                  displayType="text"
                  thousandSeparator
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const showEachOrders = () =>
    agentprods &&
    agentprods.map((order, i) => (
      <div key={i} className="card">
        <div class="card-body">
          <p>
            Order ID: {order._id} // Order Date:{" "}
            {moment(order.createdAt).format("MM/DD/YYYY")} //Status:{" "}
            <span class="badge badge-pill badge-soft-danger font-size-11">
              {order.orderStatus}
            </span>
          </p>
          {showOrderInTable(order)}
          <div className="row">
            <div className="col">
              <button
                type="button"
                class="btn btn-success waves-effect waves-light "
              >
                <i class="mdi mdi-plus me-1"></i> PDF Download
              </button>
            </div>
          </div>
          <div className="row bg-primary bg-soft rounded">
            <div className="col">
              <h6 class="p-2 text-primary">
                <CurrencyFormat
                  value={order.orderTotal}
                  displayType="text"
                  thousandSeparator
                />
              </h6>
            </div>
          </div>
        </div>
      </div>
    ));

  useEffect(() => {
    loadDistProds();
  }, []);

  return (
    <div class="row">
      <div class="col-sm-4">
        <h3>Agent Products</h3>
      </div>
      <div class="col-12">
        {loading && <LoadSpinner />}
        {showEachOrders()}
      </div>
    </div>
  );
};

export default AgentStock;