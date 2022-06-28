import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";
import API from "../../../helpers/api";
import { toast } from "react-toastify";
import LoadSpinner from "../../../components/Spinner";

const AddOrder = ({ close, refresh }) => {
  const [product, setProduct] = useState("");
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [quantity, setQuantity] = useState("");
  const [amount, setAmount] = useState("");
  const [stock, setStock] = useState({});
  const [distributor, setDistributor] = useState("");
  const [distributors, setDistributors] = useState([]);

  const loadProducts = async () => {
    setLoading(true);
    try {
      const res = await API.get("/products");
      console.log("Products Backend Fectch ===>", res);
      setProducts(res.data);
      setLoading(false);
    } catch (error) {
      console.log("error", error);
      setLoading(false);
    }
  };

  const loadDistributors = async () => {
    setLoading(true);
    try {
      const res = await API.get("/distributors");
      console.log("Distributors Backend Fectch ===>", res);
      setDistributors(res.data);
      setLoading(false);
    } catch (error) {
      console.log("error", error);
      setLoading(false);
    }
  };

  const handleProduct = (e) => {
    setProduct(e.target.value);
    const stocked = products.filter((s) => {
      return s._id === e.target.value;
    });
    setStock(stocked);
    console.log("Selected Item =====>", stocked);
  };

  const assigned = products.filter((g) => g._id === product);
  console.log("Item =====>", assigned.productname);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await API.post("/orders", {
        product,
        quantity,
        amount,
        distributor,
        status: "Pending",
        orderDate: Date.now()
      });
      console.log("Distributor Order Added ===>", response);
      setLoading(false);
      setProduct("");
      setQuantity("");
      setAmount("");
      setDistributor("");
      close();
      refresh();
      toast.success(`Distributor Order has been created successfully`);
    } catch (error) {
      console.log("error", error);
      setLoading(false);
      toast.error("Error while Creating Distributor");
    }
  };

  useEffect(() => {
    loadProducts();
    loadDistributors();
  }, []);

  return (
    <div className="text-center mb-4">
      <form>
        <div class="row mb-4">
          <label
            for="horizontal-firstname-input"
            class="col-sm-4 col-form-label"
          >
            Distributor
          </label>
          <div class="col-sm-8">
            <select
              name="subs"
              className="form-control"
              placeholder="Please select"
              value={distributor}
              onChange={(e) => setDistributor(e.target.value)}
            >
              <option>Select Distributor</option>
              {distributors.length > 0 &&
                distributors.map((c) => (
                  <option key={c._id} value={c._id}>
                    {c.name}
                  </option>
                ))}
            </select>
          </div>
        </div>
        <div class="row mb-4">
          <label
            for="horizontal-firstname-input"
            class="col-sm-4 col-form-label"
          >
            Products
          </label>
          <div class="col-sm-8">
            <select
              name="subs"
              className="form-control"
              placeholder="Please select"
              value={product}
              onChange={(e) => handleProduct(e)}
            >
              <option>Select Products</option>
              {products.length > 0 &&
                products.map((c) => (
                  <option key={c._id} value={c._id}>
                    {c.productname}
                  </option>
                ))}
            </select>
          </div>
        </div>
        <div class="row mb-4">
          <label
            for="horizontal-firstname-input"
            class="col-sm-4 col-form-label"
          >
            Quantity
          </label>
          <div class="col-sm-8">
            <input
              type="text"
              class="form-control"
              placeholder="Stock Needed"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
        </div>

        <div class="row mb-4">
          <label
            for="horizontal-firstname-input"
            class="col-sm-4 col-form-label"
          >
            Total Amount
          </label>
          <div class="col-sm-8">
            <input
              type="text"
              class="form-control"
              placeholder="Order Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
        </div>

        <div>
          <Button type="button" color="primary" onClick={handleSubmit}>
            {loading ? <LoadSpinner /> : "Place Order"}
          </Button>
          <Button type="button" color="secondary" onClick={close}>
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddOrder;
