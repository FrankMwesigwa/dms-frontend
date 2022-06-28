import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import API from "../../helpers/api";
import Spinner from "../../components/Spinner";
import { generatePublicUrl } from "../../helpers/imageUrl";
import { LazyLoadImage } from "react-lazy-load-image-component";

const EditAsset = ({ history, match }) => {
  const [loading, setLoading] = useState(false);
  const [engravedNo, setEngravedNo] = useState("");
  const [serialNo, setSerialNo] = useState("");
  const [status, setStatus] = useState("");
  const [assetType, setAssetType] = useState("");
  const [staffId, setStaffID] = useState("");
  const [model, setModel] = useState("");
  const [user, setUser] = useState("");
  const [officeNo, setOfficeNo] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [assignedDate, setassignedDate] = useState("");
  const [department, setDepartment] = useState("");
  const [division, setDivision] = useState("");
  const [section, setSection] = useState("");
  const [category, setCategory] = useState("");

  const [types, setTypes] = useState([]);
  const [models, setModels] = useState([]);
  const [sections, setSections] = useState([]);
  const [divisions, setDivisions] = useState([]);
  const [departments, setDepartments] = useState([]);

  const [divs, setDivs] = useState([]);
  const [secs, setSecs] = useState([]);

  const [supplier, setSupplier] = useState("");
  const [amount, setAmount] = useState("");
  const [purchasedate, setPurchaseDate] = useState("");

  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  const { id } = match.params;

  const getAsset = async () => {
    setLoading(true);
    try {
      const res = await API.get(`/assets/${id}`);
      console.log("Single Asset Fecth", res);
      setLoading(false);
      setUser(res.data.user);
      setAmount(res.data.amount);
      setAssetType(res.data.assetType);
      setCategory(res.data.category);
      setDepartment(res.data.department);
      setDivision(res.data.division);
      setSection(res.data.section);
      setEngravedNo(res.data.engravedNo);
      setJobTitle(res.data.jobTitle);
      setSerialNo(res.data.serialNo);
      setModel(res.data.model);
      setOfficeNo(res.data.officeNo);
      setPurchaseDate(res.data.setPurchaseDate);
      setSupplier(res.data.supplier);
      setPurchaseDate(res.data.purchasedate);
      setassignedDate(res.data.assignedDate);
      setStatus(res.data.status);
    } catch (error) {
      console.log("Single Asset Fecth Error", error);
      setLoading(false);
    }
  };

  const handleDepartment = (e) => {
    setDepartment(e.target.value);
    const filteredDivisions = divisions.filter((division) => {
      return division.department.name === e.target.value;
    });
    setDivs(filteredDivisions);
  };

  const handleDivision = (e) => {
    setDivision(e.target.value);
    const filteredSections = sections.filter((div) => {
      return div.division.name === e.target.value;
    });
    setSecs(filteredSections);
  };

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

  const loadDivisions = async () => {
    setLoading(true);
    try {
      const res = await API.get("/division");
      console.log("Divisions Fetch Backend ===>", res);
      setDivisions(res.data);
      setLoading(false);
    } catch (error) {
      console.log("error", error);
      setLoading(false);
    }
  };

  const loadSections = async () => {
    setLoading(true);
    try {
      const res = await API.get("/section");
      console.log("Sections Fetch Backend ===>", res);
      setSections(res.data);
      setLoading(false);
    } catch (error) {
      console.log("error", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTypes();
    loadModel();
    getAsset();
    loadSections();
    loadDivisions();
    loadDepartments();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      engravedNo,
      serialNo,
      status,
      assetType,
      staffId,
      assignedDate,
      user,
      officeNo,
      jobTitle,
      department,
      section,
      division,
      model,
      category,
      supplier,
      amount,
      purchasedate,
    };

      try {
        const response = await API.patch(`/assets/${id}`, data);
        setLoading(false);
        console.log("updated assets ===>", response);
        history.push("/assets");
        toast.success("Asset Updated Successfully !!");
      } catch {
        setLoading(false);
        toast.error("Error while Updating Asset");
      }

  };

  return (
    <>
      <div class="row">
        <div class="col-12">
          <div class="page-title-box d-sm-flex align-items-center justify-content-between">
            <h4 class="mb-sm-0 font-size-18">Edit Inventory Item</h4>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">Basic Information</h4>
              <p class="card-title-desc">Fill all information below</p>

              <div class="row">
                <div class="col-sm-6">
                  <div class="mb-3">
                    <label for="manufacturerbrand">Serial Number</label>
                    <input
                      type="text"
                      className={
                        errors.serialNo ? "red-border" : "form-control"
                      }
                      value={serialNo}
                      onChange={(e) => setSerialNo(e.target.value)}
                    />
                    <div style={{ color: "red" }}>{errors.serialNo}</div>
                  </div>
                  <div class="mb-3">
                    <label for="manufacturername">Engraved Number</label>
                    <input
                      type="text"
                      class="form-control"
                      value={engravedNo}
                      onChange={(e) => setEngravedNo(e.target.value)}
                    />
                  </div>
                  <div class="mb-3">
                    <label for="manufacturerbrand">Supplier</label>
                    <input
                      type="text"
                      class="form-control"
                      value={supplier}
                      onChange={(e) => setSupplier(e.target.value)}
                    />
                  </div>
                  <div class="mb-3">
                    <label for="price">Asset Status</label>
                    <select
                      name="subs"
                      className="form-control"
                      placeholder="Please select"
                      value={status}
                      onChange={(e) => setStatus(e.target.value)}
                    >
                      <option>Select Asset Status</option>
                      <option>Functional</option>
                      <option>Non-Functional</option>
                    </select>
                  </div>
                </div>

                <div class="col-sm-6">
                  <div class="mb-3">
                    <label class="control-label">Asset Category</label>
                    <select
                      name="category"
                      value={assetType}
                      className="form-control"
                      onChange={(e) => setAssetType(e.target.value)}
                    >
                      <option>Select Asset Category</option>
                      {types.length > 0 &&
                        types.map((c) => (
                          <option key={c._id} value={c._id}>
                            {c.name}
                          </option>
                        ))}
                    </select>
                  </div>
                  <div class="mb-3">
                    <label class="control-label">Asset Model</label>

                    <select
                      name="subs"
                      className="form-control"
                      placeholder="Please select"
                      value={model}
                      onChange={(e) => setModel(e.target.value)}
                    >
                      <option>Select Asset Model</option>
                      {models.length > 0 &&
                        models.map((c) => (
                          <option key={c._id} value={c._id}>
                            {c.name}
                          </option>
                        ))}
                    </select>
                  </div>
                  <div class="mb-3">
                    <label for="productdesc">Purchase Date</label>
                    <input
                      type="date"
                      class="form-control"
                      value={purchasedate}
                      onChange={(e) => setPurchaseDate(e.target.value)}
                    />
                  </div>
                  <div class="mb-3">
                    <label for="productdesc">Purchase Amount</label>
                    <input
                      type="text"
                      class="form-control"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-body">
              <p class="card-title-desc">Asset Location Information</p>
              <div>
                <div class="row">
                  <div class="col-sm-6">
                    <div class="mb-3">
                      <label for="metakeywords">Department</label>
                      <select
                        name="subs"
                        className="form-control"
                        placeholder="Please select"
                        value={department}
                        onChange={(e) => handleDepartment(e)}
                      >
                        <option>Select Department</option>
                        {departments.length > 0 &&
                          departments.map((c) => (
                            <option key={c.name} value={c.name}>
                              {c.name}
                            </option>
                          ))}
                      </select>
                    </div>
                    <div class="mb-3">
                      <label for="metakeywords">Division</label>
                      <select
                        name="subs"
                        className="form-control"
                        placeholder="Please select"
                        value={division}
                        onChange={(e) => handleDivision(e)}
                      >
                        <option>Select Division</option>
                        {divs.length > 0 &&
                          divs.map((c) => (
                            <option key={c.name} value={c.name}>
                              {c.name}
                            </option>
                          ))}
                      </select>
                    </div>
                    <div class="mb-3">
                      <label for="metakeywords">Section</label>
                      <select
                        name="subs"
                        className="form-control"
                        placeholder="Please select"
                        value={section}
                        onChange={(e) => setSection(e.target.value)}
                      >
                        <option>Select Section</option>
                        {secs.length > 0 &&
                          secs.map((c) => (
                            <option key={c.name} value={c.name}>
                              {c.name}
                            </option>
                          ))}
                      </select>
                    </div>
                    {/* <div class="mb-3">
                      <label for="metakeywords">Health Facility</label>
                      <input
                        id="metakeywords"
                        type="text"
                        class="form-control"
                        value={facility}
                        onChange={(e) => setFacility(e.target.value)}
                      />
                    </div> */}
                  </div>

                  <div class="col-sm-6">
                    <div class="mb-3">
                      <label for="metatitle">Office / Room Number</label>
                      <input
                        id="metatitle"
                        type="text"
                        class="form-control"
                        value={officeNo}
                        onChange={(e) => setOfficeNo(e.target.value)}
                      />
                    </div>
                    <div class="mb-3">
                      <label for="metatitle">Assigned Staff Names</label>
                      <input
                        id="metatitle"
                        type="text"
                        class="form-control"
                        value={user}
                        onChange={(e) => setUser(e.target.value)}
                      />
                    </div>
                    <div class="mb-3">
                      <label for="metakeywords">Assigned Date</label>
                      <input
                        id="metakeywords"
                        type="date"
                        class="form-control"
                        value={assignedDate}
                        onChange={(e) => setassignedDate(e.target.value)}
                      />
                    </div>
                    {/* <div class="mb-3">
                      <label for="metakeywords">General Hospital</label>
                      <input
                        id="metakeywords"
                        type="text"
                        class="form-control"
                        value={genHospital}
                        onChange={(e) => setGenHospital(e.target.value)}
                      />
                    </div> */}
                  </div>
                </div>

                <div class="d-flex flex-wrap gap-2">
                  <button
                    type="submit"
                    class="btn btn-primary waves-effect waves-light"
                    onClick={handleSubmit}
                  >
                    Update Item
                    {/* {loading ? <Spinner /> : "Add Product"} */}
                  </button>
                  <button
                    type="submit"
                    class="btn btn-secondary waves-effect waves-light"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditAsset;
