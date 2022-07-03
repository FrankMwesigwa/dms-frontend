import React, { useState, useEffect } from "react";
import API from "../../../helpers/api";
import ProductsListing from "./ProductsListing";

const AgentsOrders = () => {
  const [orders, setOrders] = useState([]);
  const [dist, setDist] = useState();
  const [loading, setLoading] = useState(false);

  const loadAgents = async () => {
    setLoading(true);
    try {
      const res = await API.get("/agents/dist/products");
      setDist(res.data.dist);
      setLoading(false);
    } catch (error) {
      console.log("error", error);
      setLoading(false);
    }
  };

  const loadOrders = async () => {
    setLoading(true);
    try {
      const res = await API.get("/orders");
      console.log("Distributor Orders Fetch Backend ===>", res);
      setOrders(res.data);
      setLoading(false);
    } catch (error) {
      console.log("error", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    loadOrders();
    loadAgents();
  }, []);

  return (
    <>
      <ProductsListing products={orders} distId={dist}/>
    </>
  );
};

export default AgentsOrders;
