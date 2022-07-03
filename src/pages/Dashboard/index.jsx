import React, { useState, useEffect } from "react";
import Stats from "./Stats";
import API from "../../helpers/api";
import LoadSpinner from "../../components/Spinner";
import Charts from "./Charts";

const DashBoard = () => {
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);
  const [customers, setCustomers] = useState([]);
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

  const loadCustomers = async () => {
    setLoading(true);
    try {
      const res = await API.get("/otp/customer");
      console.log("Customers Backend ===>", res);
      setCustomers(res.data);
      setLoading(false);
    } catch (error) {
      console.log("error", error);
      setLoading(false);
    }
  };

  const loadProducts = async () => {
    setLoading(true);
    try {
      const res = await API.get("/product");
      console.log("Products Fetch Backend ===>", res);
      setProducts(res.data);
      setLoading(false);
    } catch (error) {
      console.log("error", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    loadOrders();
    loadCustomers();
    loadProducts();
  }, []);
  return (
    <>
      <div class="row">
        <div class="col-12">
          <div class="page-title-box d-sm-flex align-items-center justify-content-between">
            <h4 class="mb-sm-0 font-size-18">Distributor & Agents Dashboard Overview </h4>
            <div class="page-title-right">
              <ol class="breadcrumb m-0">
                <li class="breadcrumb-item">
                  <a href="javascript: void(0);"></a>
                </li>
                <li class="breadcrumb-item active">Dashboard</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <Stats orders={orders} customers={customers} products={products} />
      <Charts />
    </>
  );
};

export default DashBoard;
