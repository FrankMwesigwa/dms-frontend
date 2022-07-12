import React, { useState, useEffect } from "react";
import moment from "moment";
import API from "../../../helpers/api";
import LoadSpinner from "../../../components/Spinner";
import Product from "./ProductCard";

const DistProducts = () => {
  const [distprods, setDistProds] = useState([]);
  const [loading, setLoading] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));

  const loadDistProds = async () => {
    setLoading(true);
    try {
      const res = await API.get("/dist/orders/products");
      console.log("Distributor Products Backend ===>", res);
      setDistProds(res.data);
      setLoading(false);
    } catch (error) {
      console.log("error", error);
      setLoading(false);
    }
  };

  const showEachOrders = () => (
    <>
      <div className="row bg-primary bg-soft rounded">
        <p p-3>
          Order ID: {distprods.bacthNo}
          Distributor: {distprods.distributor}
          {moment(distprods.createdAt).format("MM/DD/YYYY")} //Status:{" "}
          {distprods.orderStatus}
        </p>
      </div>
      <div class="row">
        {distprods.products
          ? distprods.products.map((item) => <Product product={item} />)
          : "No Products Yet"}
      </div>
    </>
  );

  useEffect(() => {
    loadDistProds();
  }, []);

  return (
    <div class="row">
      <div class="col-sm-4">
        <h3>Distributor Products</h3>
      </div>
      <div class="col-12">
        {loading && <LoadSpinner />}
        {showEachOrders()}
      </div>
    </div>
  );
};

export default DistProducts;
