import React, { useState, useEffect } from "react";
import API from "../../../helpers/api";
import Modal from "../../../components/Modal";
import AddOrder from "./AddOrders";
import ProductsListing from "./ProductsListing";

const OrdersListing = () => {
  const [modal, setmodal] = useState(false);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  const toggleModal = () => setmodal(!modal);

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
      {/* <div class="row">
        <div class="col-12">
          <div class="mb-3 d-sm-flex align-items-center justify-content-between">
            <h4 class="mb-3 font-size-18">Distributor Orders</h4>
          </div>
        </div>
      </div> */}

      <Modal open={toggleModal} modal={modal} title="Add OrdersListing">
        <AddOrder close={toggleModal} refresh={loadOrders} />
      </Modal>

      <ProductsListing products={orders} />
    </>
  );
};

export default OrdersListing;
