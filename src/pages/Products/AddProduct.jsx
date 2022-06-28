import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import API from "../../helpers/api";
import Spinner from "../../components/Spinner";
import { generatePublicUrl } from "../../helpers/imageUrl";
import { LazyLoadImage } from "react-lazy-load-image-component";

const AddProducts = ({ history }) => {
  const [loading, setLoading] = useState(false);
  const [batchNo, setBatchNo] = useState("");
  const [productname, setProductName] = useState("");
  const [assetType, setAssetType] = useState("");
  const [quantity, setQuantity] = useState("");
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
    loadSections();
    loadDivisions();
    loadDepartments();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      batchNo,
      productname,
      quantity,
      assetType,
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
      const response = await API.post("/products", data);
      setLoading(false);
      console.log("added products ===>", response);
      history.push("/products");
      toast.success("New Product Created Successfully !!");
    } catch {
      setLoading(false);
      toast.error("Error while creating New Product");
    }
  };

  return (
    <>
      <div class="row">
        <div class="col-12">
          <div class="d-sm-flex align-items-center justify-content-between">
            <h4 class="mb-3 font-size-18">Add New Inventory Product</h4>
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
                    <label for="manufacturerbrand">Product Name</label>
                    <input
                      type="text"
                      className={"form-control"}
                      value={productname}
                      onChange={(e) => setProductName(e.target.value)}
                    />
                  </div>
                  <div class="mb-3">
                    <label for="manufacturername">Batch Number</label>
                    <input
                      type="text"
                      class="form-control"
                      value={batchNo}
                      onChange={(e) => setBatchNo(e.target.value)}
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
                    <label for="price">Batch Quantity</label>
                    <input
                      type="text"
                      class="form-control"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                    />
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
                      <option>Functional</option>
                      <option>Non-Functional</option>
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
                      <option>Functional</option>
                      <option>Non-Functional</option>
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
              <p class="card-title-desc">Warehouse Location Information</p>
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
                    Add Product
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

export default AddProducts;
