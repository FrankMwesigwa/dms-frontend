import React from "react";
import moment from "moment";
import CurrencyFormat from "react-currency-format";
import LoadSpinner from "../../../components/Spinner";

const AdminSales = ({ orders, loading, handleStatusChange }) => {
  const showOrderInTable = (order) => (
    <div class="table-responsive">
      <table class="table table-bordered">
        <thead class="table-light">
          <tr>
            <th class="">Product Name</th>
            <th class="">Quantity</th>
            <th class="">Unit Price</th>
            <th class="">Total Amount</th>
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
              <td>
                <CurrencyFormat
                  value={p.amount * p.count}
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
    orders.map((order, i) => (
      <div key={i} className="card">
        <div class="card-body">
          <div className="row">
            <div className="col">
              <span>
                Order ID: {order._id} 
              </span>
            </div>
            <div className="col">
              <span>Order Status: </span>
              <span class="badge badge-pill badge-soft-danger font-size-11">
                {order.orderStatus}
              </span>
            </div>
          </div>
          <div className="row">
            <div className="col">
              Order Date:
              <span>
                {moment(order.createdAt).format("YYYY-MM-DD hh:mm a")}
              </span>
              <br />
            </div>
            <div className="col">
              Sales Date: {moment(order.updatedAt).format("YYYY-MM-DD hh:mm a")}
            </div>
          </div>

          {showOrderInTable(order)}
          <div className="row bg-primary bg-soft rounded">
            <div className="col">
              <h4 className="p-2 text-primary">Total Cash Sales: </h4>
            </div>
            <div className="col">
              <h4 class="p-2 text-primary">
                <CurrencyFormat
                  value={order.orderTotal}
                  displayType="text"
                  thousandSeparator
                />
              </h4>
            </div>
          </div>
        </div>
      </div>
    ));

  return (
    <div class="row">
      <div class="col-12">
        {/* {loading && <LoadSpinner />} */}
        {showEachOrders()}
      </div>
    </div>
  );
};

export default AdminSales;
