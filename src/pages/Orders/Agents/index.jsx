import React, { useState, useEffect } from "react";
import API from "../../../helpers/api";
import ProductsListing from "./ProductsListing";

const AgentsOrders = () => {
  const [distprods, setDistProds] = useState([]);
  const [loading, setLoading] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));

  const loadDistProds = async () => {
    setLoading(true);
    try {
      const res = await API.get("/agents/dist/product");
      console.log("Distributor Products Backend ===>", res);
      setDistProds(res.data);
      setLoading(false);
    } catch (error) {
      console.log("error", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    loadDistProds();
  }, []);

  return (
    <>
      <ProductsListing orders={distprods && distprods} />
    </>
  );
};

export default AgentsOrders;
