import React, { useState, useEffect } from "react";
import moment from "moment";
import CurrencyFormat from "react-currency-format";
import API from "../../../../helpers/api";
import LoadSpinner from "../../../../components/Spinner";

const DistSales = () => {
  const [sales, setSales] = useState([]);
  const [loading, setLoading] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${user.accessToken}`,
    },
  };

  const loadDistProds = async () => {
    setLoading(true);
    try {
      const res = await API.get("/dist/sale/admin", config);
      console.log("Admin Sales Backend ===>", res);
      setSales(res.data);
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
            <th class="">Quantity Sold</th>
            <th class="">Unit Price</th>
            <th class="">Total Sales</th>
          </tr>
        </thead>

        <tbody>
          {order.products.map((p, i) => (
            <tr key={i}>
              <td>
                <b>{p.name}</b>
              </td>
              <td>{p.sale}</td>
              <td>
                <CurrencyFormat
                  value={p.amount}
                  displayType="text"
                  thousandSeparator
                />
              </td>
              <td>
                <CurrencyFormat
                  value={p.salePrice}
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
    sales.map((order, i) => (
      <div key={i} className="card">
        <div class="card-body">
          <div className="row">
            <div className="col">Sale ID: {order._id}</div>
            <div className="col">
            <span class="badge badge-pill badge-soft-danger font-size-11">
              Sales Date: {moment(order.createdAt).format("YYYY-DD-MM hh:mm")}
              </span>
            </div>
          </div>

          {showOrderInTable(order)}
          {/* <div className="row">
            <div className="col">
              <button
                type="button"
                class="btn btn-success waves-effect waves-light "
              >
                <i class="mdi mdi-plus me-1"></i> PDF Download
              </button>
            </div>
          </div> */}
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
      <div class="col-12">
        <h2>Distributor Sales Report</h2>
      </div>
      <div class="col-12">
        {loading && <LoadSpinner />}
        {showEachOrders()}
      </div>
    </div>
  );
};

export default DistSales;
