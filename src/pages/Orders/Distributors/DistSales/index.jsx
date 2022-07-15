import React, { useState, useEffect } from "react";
import moment from "moment";
import { toast } from "react-toastify";
import SalesRow from "./SalesRow";
import API from "../../../../helpers/api";
import CurrencyFormat from "react-currency-format";
import LoadSpinner from "../../../../components/Spinner";

const DistSales = () => {
  const [agentprods, setAgentProds] = useState([]);
  const [loading, setLoading] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));

  const loadDistProds = async () => {
    setLoading(true);
    try {
      const res = await API.get("/dist/orders/products");
      console.log("Dist Products Backend ===>", res);
      setAgentProds(res.data);
      setLoading(false);
    } catch (error) {
      console.log("error", error);
      setLoading(false);
    }
  };

  const makeSales = async (e) => {
    e.preventDefault()
    setLoading(true);

    const products = JSON.parse(localStorage.getItem("allSales"));

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.accessToken}`,
      },
    };

    try {
      const res = await API.post(
        "/dist/sale",
        { products},
        config
      );
      setLoading(false);
      toast.success("Dist Sale Succesfuuly Made");
      localStorage.removeItem("sale");
      localStorage.removeItem("allSales");
      console.log("Sales Made ===>", res);
    } catch (error) {
      console.log("error", error);
      setLoading(false);
    }
  }

  const showOrderInTable = (order) => (
    <div class="table-responsive">
      <table class="table table-bordered">
        <thead class="table-light">
          <tr>
            <th class="">Product Name</th>
            <th class="">Unit Cost</th>
            <th class="">Available Stock</th>
            <th class="">Sold Quantity</th>
            <th class="">Sale price</th>
            <th class="">Sale Entry</th>
          </tr>
        </thead>

        <tbody>
          {order.products.map((p, i) => (
            <SalesRow key={p._id} p={p} />
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
            <div className="row">
                <div className="col">Order ID: {order._id}</div>
                <div className="col">Order Date: {moment(order.createdAt).format("YYYY-DD-MM hh:mm")} </div>
            </div>
          <p>
            <span class="badge badge-pill badge-soft-danger font-size-11">
              {order.orderStatus}
            </span>
          </p>
          {showOrderInTable(order)}
          <div className="row">
            <div className="col">
              <button
                type="button"
                onClick={makeSales}
                class="btn btn-success waves-effect waves-light "
              >
                <i class="mdi mdi-plus me-1"></i> Save Sales
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
        <h2>Add Disbustrator Sales</h2>
      </div>
      <div class="col-12">
        {loading && <LoadSpinner />}
        {showEachOrders()}
      </div>
    </div>
  );
};

export default DistSales;
