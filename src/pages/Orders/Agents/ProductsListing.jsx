import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import LoadSpinner from "../../../components/Spinner";
import Product from "../../../components/Cards/AgentCard";

const ProductsListing = ({ orders, loading }) => {
  // const showOrderInTable = () => (
  //   <>
  //     <div class="row">
  //       {orders && orders.products.map((item) => (
  //         <Product product={item} />
  //       ))}
  //     </div>
  //   </>
  // );

  const showEachOrders = () => (
    <>
      <div className="row bg-primary bg-soft rounded">
        <p p-3>
          Order ID: {orders.bacthNo}
          Distributor: {orders.distributor}
          {/* {moment(orders.createdAt).format("MM/DD/YYYY")} //Status:{" "}
            {order.orderStatus} */}
        </p>
      </div>
      <div class="row">
        {orders.products ? orders.products.map((item) => (
          <Product product={item} />
        )): 'No Products Yet'}
      </div>
    </>
  );

  return (
    <div class="row">
      <div class="col-sm-4">
        <Link to="/orders/agent">
          <button
            type="button"
            class="btn btn-success waves-effect waves-light "
          >
            <i class="mdi mdi-plus me-1"></i> Go To Agent Cart
          </button>
        </Link>
      </div>
      <div class="col-12">
        {loading && <LoadSpinner />}
        {showEachOrders()}
      </div>
    </div>
  );
};

export default ProductsListing;
