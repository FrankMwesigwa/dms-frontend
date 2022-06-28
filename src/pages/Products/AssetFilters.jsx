import React, { useState, useEffect } from "react";
import API from "../../helpers/api";

const AssetFilters = ({ filtered, clearFilters, status, assetType, department, programme, model,
setAssetType, setDepartment, setModel, setStatus, setProgramme }) => {

  const [types, setTypes] = useState([]);
  const [models, setModels] = useState([]);
  const [loading, setLoading] = useState(false);
  const [departments, setDepartments] = useState([]);
  const [programmes, setProgrammes] = useState([]);
    
  const loadTypes = async () => {
    setLoading(true);
    try {
      const res = await API.get("/type");
      console.log("Asset Types Backend Fectch ===>", res);
      setTypes(res.data);
      setLoading(false);
    } catch (error) {
      console.log("error", error);
      setLoading(false);
    }
  };

  const loadModel = async () => {
    setLoading(true);
    try {
      const res = await API.get("/model");
      console.log("Models Backend Fectch ===>", res);
      setModels(res.data);
      setLoading(false);
    } catch (error) {
      console.log("error", error);
      setLoading(false);
    }
  };

  const loadDepartments = async () => {
    setLoading(true);
    try {
      const res = await API.get("/department");
      console.log("Departments Backend Fectch ===>", res);
      setDepartments(res.data);
      setLoading(false);
    } catch (error) {
      console.log("error", error);
      setLoading(false);
    }
  };

  const loadProgrammes = async () => {
    setLoading(true);
    try {
      const res = await API.get("/programme");
      console.log("Programmes Backend Fectch ===>", res);
      setProgrammes(res.data);
      setLoading(false);
    } catch (error) {
      console.log("error", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTypes();
    loadModel();
    loadProgrammes();
    loadDepartments();
  }, []);

  return (
    <div class="row">
      <div class="col-xl col-sm-6">
        <div class="mb-3">
          <label class="form-label">Status :</label>
          <select
            class="form-control"
            tabindex="-1"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="BTC" selected="" data-select2-id="3">
              By Status
            </option>
            <option value={"Functional"}>Functional</option>
            <option value={"Non-Functional"}>Non-Functional</option>
          </select>
        </div>
      </div>

      <div class="col-xl col-sm-6">
        <div class="mb-3">
          <label class="form-label">Category :</label>
          <select
            class="form-control"
            value={assetType}
            onChange={(e) => setAssetType(e.target.value)}
          >
            <option value="BTC" selected="" data-select2-id="3">
              By Category
            </option>
            {types.length > 0 &&
              types.map((c) => (
                <option key={c._id} value={c.name}>
                  {c.name}
                </option>
              ))}
          </select>
        </div>
      </div>

      <div class="col-xl col-sm-6">
        <div class="mb-3">
          <label class="form-label">Department :</label>
          <select
            class="form-control"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          >
            <option value="BTC" selected="" data-select2-id="3">
              By Department
            </option>
            {departments.length > 0 &&
              departments.map((c) => (
                <option key={c._id} value={c.name}>
                  {c.name}
                </option>
              ))}
          </select>
        </div>
      </div>

      <div class="col-xl col-sm-6">
        <div class="mb-3">
          <label class="form-label">Programme :</label>
          <select
            class="form-control"
            value={programme}
            onChange={(e) => setProgramme(e.target.value)}
          >
            <option value="BU" selected="" data-select2-id="6">
              By Programme
            </option>
            {programmes.length > 0 &&
              programmes.map((c) => (
                <option key={c._id} value={c.name}>
                  {c.name}
                </option>
              ))}
          </select>
        </div>
      </div>


      <div class="col-xl col-sm-6 align-self-end">
        <div class="mb-3">
          <button type="button" class="btn btn-primary" onClick={filtered}>
            Apply Filters
          </button>
        </div>
      </div>
      <div class="col-xl col-sm-6 align-self-end">
        <div class="mb-3">
          <button type="button" class="btn btn-primary" onClick={clearFilters}>
            Clear Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default AssetFilters;
