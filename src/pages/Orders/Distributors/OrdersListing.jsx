import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import LoadSpinner from "../../../components/Spinner";

const OrdersListing = ({ orders, loading, link }) => {
  return (
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            {loading && <LoadSpinner />}
            <div class="row mb-2">
              <div class="col-sm-4">
                <span class="">
                  <button
                    type="button"
                    class="btn btn-success waves-effect waves-light "
                    onClick={link}
                  >
                    <i class="mdi mdi-plus me-1"></i> Place New Order
                  </button>
                </span>
              </div>
              <div class="col-sm-6">
                <div class="text-sm-end ">
                  <div class="position-relative">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Search..."
                    />
                  </div>
                </div>
              </div>
            </div>

            <div class="table-responsive">
              <table class="table table-nowrap">
                <thead class="table-light">
                  <tr>
                    <th class="">Order Date</th>
                    <th class="">Approval Date</th>
                    <th class="">Order Items</th>
                    <th class="">Order Quantity</th>
                    <th class="">Order Amount</th>
                    <th class="">Order Status</th>
                    <th class="">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.length > 0
                    ? orders.map((order) => (
                        <tr>
                          <td>
                            {moment(order.orderDate).format("MM/DD/YYYY")}
                          </td>
                          <td>
                            {moment(order.approvalDate).format("MM/DD/YYYY")}
                          </td>
                          <td>{order.product.productname}</td>
                          <td>{order.quantity}</td>
                          <td>
                            <CurrencyFormat
                              value={order.amount}
                              displayType="text"
                              thousandSeparator
                            />
                          </td>
                          <td>{order.status}</td>
                          <td>
                            <div class="d-flex gap-3">
                              <Link
                                to={`/updateproduct/${order._id}`}
                                class="text-success"
                              >
                                <i class="bx bx-edit font-size-18"></i>
                              </Link>
                              <a href="javascript:void(0);" class="text-danger">
                                <i class="bx bxs-trash font-size-18"></i>
                              </a>
                            </div>
                          </td>
                        </tr>
                      ))
                    : "No Orders Placed Yet !!"}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrdersListing;
