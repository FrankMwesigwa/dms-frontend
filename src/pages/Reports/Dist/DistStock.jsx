import React, { useState, useEffect } from "react";
import moment from "moment";
import API from "../../../helpers/api";
import LoadSpinner from "../../../components/Spinner";
import Product from "./ProductCard";

const DistProducts = () => {
  const [distprods, setDistProds] = useState([]);
  const [loading, setLoading] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${user.accessToken}`,
    },
  };

  const loadDistProds = async () => {
    setLoading(true);
    try {
      const res = await API.get("/dist/orders/products", config);
      console.log("Distributor Stock Backend ===>", res);
      setDistProds(res.data);
      setLoading(false);
    } catch (error) {
      console.log("error", error);
      setLoading(false);
    }
  };

  const showEachOrders = () =>
    distprods.map((order, i) => (
      <div key={i}>
        <div class="card-body">
          <div className="row bg-primary bg-soft rounded">
            <div className="col">Purchase ID: {order._id}</div>
            <div className="col">
                Purhase Date: {moment(order.createdAt).format("YYYY-DD-MM hh:mm")}
            </div>
          </div>

          <div class="row">
            {order.products.map((item) => (
              <Product product={item} />
            ))}
          </div>
        </div>
      </div>
    ));

  useEffect(() => {
    loadDistProds();
  }, []);

  return (
    <div class="row">
      <div class="col-sm-4">
        <h3>Distributor Products Stock</h3>
      </div>
      <div class="col-12">
        {loading && <LoadSpinner />}
        {showEachOrders()}
      </div>
    </div>
  );
};

export default DistProducts;
