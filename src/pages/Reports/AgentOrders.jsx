import React, { useState, useEffect } from "react";
import moment from "moment";
import API from "../../helpers/api";
import LoadSpinner from "../../components/Spinner";

const AgentOrders = () => {
  const [agentProds, setAgentProds] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadDistProds = async () => {
    setLoading(true);
    try {
      const res = await API.get("/agents/dist/product");
      console.log("Agent Products ===> XXXX", res);
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
  );
};

export default AgentOrders;
