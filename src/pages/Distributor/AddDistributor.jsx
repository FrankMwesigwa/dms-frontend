import React, { useState } from "react";
import { Button } from "reactstrap";
import API from "../../helpers/api";
import { toast } from "react-toastify";
import LoadSpinner from "../../components/Spinner";

const AddDistributor = ({ close, refresh }) => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [createdBy, setCreatedBy] = useState("");
  const [region, setRegion] = useState("");
  const [location, setLocation] = useState("");
  const [contact, setContact] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await API.post("/user", {
        email,
        name,
        region,
        username,
        password,
        contact,
        location,
        createdBy,
        role: 'distributor'
      });
      console.log("Distributor Added ===>", response);
      setLoading(false);
      setName("");
      setEmail("");
      setPassword("");
      setUserName("");
      setRegion("");
      setLocation("");
      setContact("");
      close();
      refresh();
      toast.success(`Distributor has been created successfully`);
    } catch (error) {
      console.log("error", error);
      setLoading(false);
      toast.error("Error while Creating Distributor");
    }
  };

  return (
    <div className="text-center mb-4">
      <form>
      <div class="row mb-4">
          <label
            for="horizontal-firstname-input"
            class="col-sm-4 col-form-label"
          >
            UserName
          </label>
          <div class="col-sm-8">
            <input
              type="text"
              class="form-control"
              placeholder="Enter User Name"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
        </div>
        <div class="row mb-4">
          <label
            for="horizontal-firstname-input"
            class="col-sm-4 col-form-label"
          >
            Password
          </label>
          <div class="col-sm-8">
            <input
              type="text"
              class="form-control"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div class="row mb-4">
          <label
            for="horizontal-firstname-input"
            class="col-sm-4 col-form-label"
          >
            Distributor
          </label>
          <div class="col-sm-8">
            <input
              type="text"
              class="form-control"
              placeholder="Enter Distributor Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div class="row mb-4">
          <label
            for="horizontal-firstname-input"
            class="col-sm-4 col-form-label"
          >
            Email
          </label>
          <div class="col-sm-8">
            <input
              type="text"
              class="form-control"
              placeholder="Enter User Name"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div class="row mb-4">
          <label
            for="horizontal-firstname-input"
            class="col-sm-4 col-form-label"
          >
            Region
          </label>
          <div class="col-sm-8">
            <input
              type="text"
              class="form-control"
              placeholder="Select Region"
              value={region}
              onChange={(e) => setRegion(e.target.value)}
            />
          </div>
        </div>

        <div class="row mb-4">
          <label
            for="horizontal-firstname-input"
            class="col-sm-4 col-form-label"
          >
            Location
          </label>
          <div class="col-sm-8">
            <input
              type="text"
              class="form-control"
              placeholder="Enter Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
        </div>

        <div class="row mb-4">
          <label
            for="horizontal-firstname-input"
            class="col-sm-4 col-form-label"
          >
            Contact
          </label>
          <div class="col-sm-8">
            <input
              type="text"
              class="form-control"
              placeholder="Enter Distributor Contacts"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
          </div>
        </div>
        <div>
          <Button type="button" color="primary" onClick={handleSubmit}>
            {loading ? <LoadSpinner /> : "Add New Distributor"}
          </Button>
          <Button type="button" color="secondary" onClick={close}>
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddDistributor;
