import React, { useState, useEffect } from "react";
import API from "../../../../helpers/api";
import OrderHistory from "./OrdersHistory";

const OrdersHistory = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));

  const loadOrders = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.accessToken}`,
      },
    };

    setLoading(true);
    try {
      const res = await API.get("/dist/orders", config);
      setOrders(res.data);
      setLoading(false);
    } catch (error) {
      console.log("error", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    loadOrders();
  }, []);

  return (
    <>
      <div class="row">
        <div class="col-12">
          <div class="mb-3 d-sm-flex align-items-center justify-content-between">
            <h4 class="mb-3 font-size-18">Distributor Orders History</h4>
          </div>
        </div>
      </div>

      <OrderHistory
        title="Add OrdersHistory"
        loading={loading}
        orders={orders}
      />
    </>
  );
};

export default OrdersHistory;
