import React, { useState, useEffect } from "react";
import API from "../../helpers/api";
import Modal from "../../components/Modal";
import AddAgent from "./AddAgent";
import AgentsListing from "./AgentListing";

const Agents = () => {
  const [modal, setmodal] = useState(false);
  const [agents, setAgents] = useState([]);
  const [loading, setLoading] = useState(false);

  const toggleModal = () => setmodal(!modal);

  const loadAgents = async () => {
    setLoading(true);
    try {
      const res = await API.get("/agents");
      console.log("Agents Fetch Backend ===>", res);
      setAgents(res.data);
      setLoading(false);
    } catch (error) {
      console.log("error", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAgents();
  }, []);

  return (
    <>
      <div class="row">
        <div class="col-12">
          <div class="mb-3 d-sm-flex align-items-center justify-content-between">
            <h4 class="mb-3 font-size-18">Agents Listing</h4>
          </div>
        </div>
      </div>

      <Modal open={toggleModal} modal={modal} title="Add Agents">
        <AddAgent close={toggleModal} refresh={loadAgents} />
      </Modal>

      <AgentsListing
        title="Add Agents"
        link={toggleModal}
        loading={loading}
        agents={agents}
      />
    </>
  );
};

export default Agents;
