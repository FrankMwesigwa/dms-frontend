import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";
import API from "../../helpers/api";
import { toast } from "react-toastify";
import LoadSpinner from "../../components/Spinner";

const AddAgent = ({ close, refresh }) => {
  const [name, setName] = useState("");
  const [createdBy, setCreatedBy] = useState("");
  const [distributor, setDistributor] = useState("");
  const [loading, setLoading] = useState(false);
  const [distributors, setDistributors] = useState([]);
  const [region, setRegion] = useState("");
  const [location, setLocation] = useState("");
  const [contact, setContact] = useState("");

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await API.post("/agents", {
        name,
        distributor,
        region,
        contact,
        location,
        createdBy,
      });
      console.log("Agent Added ===>", response);
      setLoading(false);
      setName("");
      setDistributor("");
      setRegion("")
      setLocation("")
      setContact("")
      close();
      refresh();
      toast.success(`Agent has been created successfully`);
    } catch (error) {
      console.log("error", error);
      setLoading(false);
      toast.error("Error while creating Agent");
    }
  };

  useEffect(() => {
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
            Agent Name
          </label>
          <div class="col-sm-8">
            <input
              type="text"
              class="form-control"
              placeholder="Enter Agent Name"
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
              placeholder="Enter Agent Contact"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
          </div>
        </div>

        <div>
          <Button type="button" color="primary" onClick={handleSubmit}>
            {loading ? <LoadSpinner /> : "Add New Agent"}
          </Button>
          <Button type="button" color="secondary" onClick={close}>
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddAgent;
