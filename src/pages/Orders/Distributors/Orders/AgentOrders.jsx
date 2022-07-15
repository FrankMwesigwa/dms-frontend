import React from "react";
import moment from "moment";
import CurrencyFormat from "react-currency-format";
import LoadSpinner from "../../../../components/Spinner";

const AgentOrders = ({ orders, loading, handleStatusChange }) => {
  const showOrderInTable = (order) => (
    <div class="table-responsive">
      <table class="table table-bordered">
        <thead class="table-light">
          <tr>
            <th class="">Product Name</th>
            <th class="">Quantity</th>
            <th class="">Amount</th>
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
    orders.map((order, i) => (
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
              <p>Update Order Status: </p>
            </div>
            <div className="col">
              <select
                onChange={(e) => handleStatusChange(order._id, e.target.value)}
                className="form-control"
                defaultValue={order.orderStatus}
                name="status"
              >
                <option value="Not Processed">Not Processed</option>
                <option value="Accepted">Accepted</option>
                <option value="Rejected">Rejected</option>
                <option value="Dispatched">Dispatched</option>
                <option value="Completed">Completed</option>
              </select>
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

  return (
    <div class="row">
      <div class="col-12">
        {loading && <LoadSpinner />}
        {showEachOrders()}
      </div>
    </div>
  );
};

export default AgentOrders;
