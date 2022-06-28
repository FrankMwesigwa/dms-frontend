import React, { useState, useEffect } from "react";
import API from "../../helpers/api";
import Modal from "../../components/Modal";
import AddAdmin from "./AddAdmin";
import AdminListing from "./AdminListing";

const AdminUsers = () => {
  const [modal, setmodal] = useState(false);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const toggleModal = () => setmodal(!modal);

  const loadUsers = async () => {
    setLoading(true);
    try {
      const res = await API.get("/user");
      console.log("AdminUsers Fetch Backend ===>", res);
      setUsers(res.data);
      setLoading(false);
    } catch (error) {
      console.log("error", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <>
      <div class="row">
        <div class="col-12">
          <div class="mb-3 d-sm-flex align-items-center justify-content-between">
            <h4 class="mb-3 font-size-18">Admin Users Listing</h4>
          </div>
        </div>
      </div>

      <Modal open={toggleModal} modal={modal} title="Add Admin Users">
        <AddAdmin close={toggleModal} refresh={loadUsers} />
      </Modal>

      <AdminListing
        title="Add Admin Users"
        link={toggleModal}
        loading={loading}
        users={users}
      />
    </>
  );
};

export default AdminUsers;
