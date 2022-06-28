import React, { useState } from "react";
import { Button } from "reactstrap";
import API from "../../helpers/api";
import { toast } from "react-toastify";
import LoadSpinner from "../../components/Spinner";

const AddAdmin = ({ close, refresh }) => {
  const [username, setUserName] = useState("");
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await API.post("/user", {
        username,
        email,
        role,
        password
      });
      console.log("Admin User Added ===>", response);
      setLoading(false);
      setUserName("");
      setEmail("");
      setPassword("");
      setRole("");
      close();
      refresh();
      toast.success(`Admin User has been created successfully`);
    } catch (error) {
      console.log("error", error);
      setLoading(false);
      toast.error("Error while Creating Admin User");
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
            Username
          </label>
          <div class="col-sm-8">
            <input
              type="text"
              class="form-control"
              placeholder="Enter Username"
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
            Email
          </label>
          <div class="col-sm-8">
            <input
              type="text"
              class="form-control"
              placeholder="Enter Email"
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
            Password
          </label>
          <div class="col-sm-8">
            <input
              type="password"
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
            Role
          </label>
          <div class="col-sm-8">
            <input
              type="text"
              class="form-control"
              placeholder="Select Role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            />
          </div>
        </div>
        <div>
          <Button type="button" color="primary" onClick={handleSubmit}>
            {loading ? <LoadSpinner /> : "Add Admin User"}
          </Button>
          <Button type="button" color="secondary" onClick={close}>
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddAdmin;
