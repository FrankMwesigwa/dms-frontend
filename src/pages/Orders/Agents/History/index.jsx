import React, { useState, useEffect } from "react";
import API from "../../../../helpers/api";
import AgentHistory from "./AgentHistory";

const AgentsHistory = () => {
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
      const res = await API.get("/agent/order", config);
      console.log("Agent Orders History Fetch Backend ===>", res);
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
            <h4 class="mb-3 font-size-18">Agent Orders History Listing</h4>
          </div>
        </div>
      </div>

      <AgentHistory
        loading={loading}
        orders={orders}
      />
    </>
  );
};

export default AgentsHistory;
