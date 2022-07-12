import React, { useState, useEffect } from "react";
import moment from "moment";
import API from "../../../helpers/api";
import { useSelector } from "react-redux";
import LoadSpinner from "../../../components/Spinner";

const AgentReport = () => {
    const [agentProds, setAgentProds] = useState([]);
  const [loading, setLoading] = useState(false);

  const auth = useSelector((state) => state.auth);

  console.log("User Logged In ====>", auth)

  const loadDistProds = async () => {
    setLoading(true);
    try {
      const res = await API.get("/agent/order");
      console.log("Agent Orders ===> XXXX", res);
      setAgentProds(res.data.products);
      setLoading(false);
    } catch (error) {
      console.log("error", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    loadDistProds();
  }, []);

  const products = agentProds && agentProds.filter(x => x.orderdBy == auth.user.user._id )

  console.log("Products ===>", products)
  return (
    <div>
      <h3>AgentOrders</h3>
      {loading && <LoadSpinner />}

      <div class="col-12">
        <div class="card">
          <div class="card-body">
            {loading && <LoadSpinner />}

            <div class="table-responsive">
              <table class="table align-middle table-nowrap">
                <thead class="table-light">
                  <tr>
                    <th class="align-middle">Product Name</th>
                    <th class="align-middle">Stock Quantity</th>
                    <th class="align-middle">Amount</th>
                    <th class="align-middle">Code</th>
                  </tr>
                </thead>
                <tbody>
                  {agentProds &&
                    agentProds.map((prod) => (
                      <tr>
                        <td>{prod.name}</td>
                        <td>{prod.count}</td>
                        <td>{prod.amount}</td>
                        <td>{prod._id}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AgentReport