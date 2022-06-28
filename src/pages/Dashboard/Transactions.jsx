import React, { useState, useEffect } from "react";
import API from "../../helpers/api";
// import OrdersList from "../Orders/OrdersList";

const Transactions = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadOrders = async () => {
    setLoading(true);
    try {
      const res = await API.get("/orders");
      console.log("Orders Backend ===>", res);
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
    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          {/* <div class="card-body">
            <h4 class="card-title mb-4">Lastest Purchased Items</h4>
            <OrdersList orders={orders} loading={loading} />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Transactions;
