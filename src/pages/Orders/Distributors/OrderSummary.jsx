import React, { useEffect, useState } from "react";
import API from "../../../helpers/api";
import CurrencyFormat from "react-currency-format";

const OrderSummary = () => {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));

  const loadOrders = async () => {
    setLoading(true);

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.accessToken}`,
      },
    };

    try {
      const res = await API.get("/cart", config);
      console.log("Order Summary Fetch Backend ===>", res);
      setProducts(res.data.products);
      setTotal(res.data.cartTotal);
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
    <div class="card shadow-none border mb-0">
      <div class="card-body">
        <h4 class="card-title mb-4">Order Summary</h4>

        <div class="table-responsive">
          <table class="table align-middle mb-0 table-nowrap">
            <thead class="table-light">
              <tr>
                <th scope="col">Product Desc</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Total</th>
              </tr>
            </thead>
            <tbody>
              {products.length > 0
                ? products.map((item) => (
                    <tr>
                      <td>
                        <h5 class="font-size-14 text-truncate">
                          <a
                            href="ecommerce-product-detail.html"
                            class="text-dark"
                          >
                            {item.name}
                          </a>
                        </h5>
                      </td>
                      <td>
                        <CurrencyFormat
                          value={item.amount}
                          displayType="text"
                          thousandSeparator
                        />
                      </td>
                      <td>{item.count}</td>
                      <td>
                        <CurrencyFormat
                          value={item.amount * item.count}
                          displayType="text"
                          thousandSeparator
                        />
                      </td>
                    </tr>
                  ))
                : "No Products Placed Yet !!"}
              <tr class="bg-primary bg-soft p-3 rounded">
                <td colspan="3">
                  <h5 class="m-0 text-end text-primary">Grand Total:</h5>
                </td>
                <td>
                  <h5 class="m-0 text-primary">
                    <CurrencyFormat
                      value={total}
                      displayType="text"
                      thousandSeparator
                    />
                  </h5>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
