import React, { useState, useEffect } from "react";
import API from "../../helpers/api";
import Modal from "../../components/Modal";
import AddDistributor from "./AddDistributor";
import DistributorListing from "./DistributorListing";

const Distributors = () => {
  const [modal, setmodal] = useState(false);
  const [distributors, setDistributors] = useState([]);
  const [loading, setLoading] = useState(false);

  const toggleModal = () => setmodal(!modal);

  const loaddistributors = async () => {
    setLoading(true);
    try {
      const res = await API.get("/distributors");
      console.log("Distributors Fetch Backend ===>", res);
      setDistributors(res.data);
      setLoading(false);
    } catch (error) {
      console.log("error", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    loaddistributors();
  }, []);

  return (
    <>
      <div class="row">
        <div class="col-12">
          <div class="mb-3 d-sm-flex align-items-center justify-content-between">
            <h4 class="mb-3 font-size-18">Distributors Listing</h4>
          </div>
        </div>
      </div>

      <Modal open={toggleModal} modal={modal} title="Add Distributors">
        <AddDistributor close={toggleModal} refresh={loaddistributors} />
      </Modal>

      <DistributorListing
        title="Add Distributors"
        link={toggleModal}
        loading={loading}
        distributors={distributors}
      />
    </>
  );
};

export default Distributors;
