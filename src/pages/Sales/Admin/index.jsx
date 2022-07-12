import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import API from "../../../helpers/api";
import AdminSales from "./AdminSales";

const AdminDistSales = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));

  const loadOrders = async () => {
    setLoading(true);
    try {
      const res = await API.get("/dist/orders/sales");
      console.log("Distributor Orders Fetch Backend ===>", res);
      setOrders(res.data);
      setLoading(false);
    } catch (error) {
      console.log("error", error);
      setLoading(false);
    }
  };

  const handleStatusChange = async (orderId, orderStatus) => {
    setLoading(true);

    const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.accessToken}`,
        },
      };

    try {
      const res = await API.put("/dist/orders/update", {orderId, orderStatus}, config)
        setLoading(false);
        toast.success("Status updated");
        window.location.reload();
        console.log("Order Status Update ===>", res);
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
            <h4 class="mb-3 font-size-18">Agregator Sales</h4>
          </div>
        </div>
      </div>

      <AdminSales
        loading={loading}
        orders={orders}
        handleStatusChange={handleStatusChange}
      />
    </>
  );
};

export default AdminDistSales;
