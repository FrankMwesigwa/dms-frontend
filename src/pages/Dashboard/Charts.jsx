import React, { useState, useEffect } from "react";
import API from "../../helpers/api";
import BarChart from "../../components/Charts/Barchart";
import Doughnut from "../../components/Charts/Doughnut";
import LineChart from "../../components/Charts/Linechart";
import PieChart from "../../components/Charts/Piechart";

const Charts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadProducts = async () => {
    setLoading(true);
    try {
      const res = await API.get("/products");
      console.log("Products Fetch Backend ===>", res);
      setProducts(res.data);
      setLoading(false);
    } catch (error) {
      console.log("error", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <>
      <div class="row">
        <div class="col-xl-8">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title mb-4">Stock Quantity</h4>
              <BarChart products={products} />
            </div>
          </div>
        </div>

        <div class="col-xl-4">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title mb-4">Sales Analytics</h4>
              <Doughnut products={products} />
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-xl-8">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title mb-4">Stock Quantity By Category</h4>
              <LineChart products={products} />
            </div>
          </div>
        </div>

        <div class="col-xl-4">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title mb-4">Stock Quantity By Region</h4>
              <PieChart products={products} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Charts;
