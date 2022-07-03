import React, { useState, useEffect } from "react";
import API from "../../../helpers/api";
import ProductsListing from "./ProductsListing";

const OrdersListing = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadOrders = async () => {
    setLoading(true);
    try {
      const res = await API.get("/products");
      console.log("OrdersListing Fetch Backend ===>", res);
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
      <ProductsListing products={orders} />
    </>
  );
};

export default OrdersListing;
