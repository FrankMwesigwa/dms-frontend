import React from "react";
import moment from "moment";
import LoadSpinner from "../../../components/Spinner";
import Product from "../../../components/Cards/AgentCard";

const ProductsListing = ({ products, distId, loading }) => {
  const orders = products.filter((x) => x.orderdBy === distId);

  const showOrderInTable = (order) => (
    <>
      <div class="row">
        {order.products.map((item) => (
          <Product product={item} />
        ))}
      </div>
    </>
  );

  const showEachOrders = () =>
    orders.map((order, i) => (
      <><div className="row bg-primary bg-soft rounded">
          <p p-3>
            Order ID: {order._id} // Order Date:{" "}
            {moment(order.createdAt).format("MM/DD/YYYY")} //Status:{" "}
            {order.orderStatus}
          </p>
          </div>
          {showOrderInTable(order)}
      </>
    ));

  return (
    <div class="row">
      <div class="col-12">
        {loading && <LoadSpinner />}
        {showEachOrders()}
      </div>
    </div>
  );
};

export default ProductsListing;
