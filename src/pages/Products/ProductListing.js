import React, { useState, useEffect } from "react";
import moment from "moment";
import { toast } from "react-toastify";
import API from "../../helpers/api";
import { Link } from "react-router-dom";
import LoadSpinner from "../../components/Spinner";
import AssetFilters from "./AssetFilters";

const ProductsListing = ({ products, link, loadproducts }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const [status, setStatus] = useState("");
  const [assetType, setAssetType] = useState("");
  const [department, setDepartment] = useState("");
  const [programme, setProgramme] = useState("");
  const [model, setModel] = useState("");
  const [assets, setAssets] = useState([]);
  const [search, setSearch] = useState(0);
  const [loading, setLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [PageSize] = useState(10);

  const firstPageIndex = (currentPage - 1) * PageSize;
  const lastPageIndex = firstPageIndex + PageSize;

  const currentPost = products.slice(firstPageIndex, lastPageIndex);

  const searchHandler = (e) => {
    setSearchTerm(e.target.value);
    searchResults();
  };

  const filtered = () => {
    const filteredAssets =
    currentPost &&
    currentPost.filter(
        (product) =>
          product.model &&
          product.model.name
            .toLowerCase()
            .includes(model.toLocaleLowerCase()) &&
          product.status &&
          product.status.toLowerCase().includes(status.toLocaleLowerCase()) &&
          product.department &&
          product.department.name
            .toLowerCase()
            .includes(department.toLocaleLowerCase()) &&
          product.assetType &&
          product.assetType.name
            .toLowerCase()
            .includes(assetType.toLocaleLowerCase()) &&
          product.programme &&
          product.programme.name
            .toLowerCase()
            .includes(programme.toLocaleLowerCase())
      );
    console.log("Filtered Assets ===>", filteredAssets);
    setSearch(1);
    setAssets(filteredAssets);
  };

  const clearFilters = () => {
    setDepartment("");
    setModel("");
    setStatus("");
    setProgramme("");
    setAssetType("");
  };

  const searchResults = () => {
    const assets =
    currentPost &&
    currentPost.filter(
        (product) =>
          (product.model &&
            product.model.name
              .toLowerCase()
              .includes(searchTerm.toLocaleLowerCase())) ||
          (product.status &&
            product.status
              .toLowerCase()
              .includes(searchTerm.toLocaleLowerCase())) ||
          (product.assetType &&
            product.assetType.name
              .toLowerCase()
              .includes(searchTerm.toLocaleLowerCase())) ||
          (product.programme &&
            product.programme.name
              .toLowerCase()
              .includes(searchTerm.toLocaleLowerCase())) ||
          (product.department &&
            product.department.name
              .toLowerCase()
              .includes(searchTerm.toLocaleLowerCase()))
      );
    setSearch(1);
    setAssets(assets);
  };

  const truncate = (input) =>
    input?.length > 20 ? `${input.substring(0, 20)}...` : input;

  const deleteAsset = async (id) => {
    setLoading(true);
    await API.delete(`/products/${id}`)
      .then(() => {
        setLoading(false);
        loadproducts();
        toast.success(`Product Deleted successfully`);
      })
      .catch((error) => {
        console.log("Product Delete Error", error);
        setLoading(false);
        toast.error("Error while Deleting Asset");
      });
  };

  return (
    <div class="row">
      <AssetFilters
        products={products}
        filtered={filtered}
        clearFilters={clearFilters}
        status={status}
        assetType={assetType}
        department={department}
        programme={programme}
        model={model}
        setAssetType={setAssetType}
        setDepartment={setDepartment}
        setModel={setModel}
        setStatus={setStatus}
        setProgramme={setProgramme}
      />

      <div class="col-12">
        <div class="card">
          <div class="card-body">
            {loading && <LoadSpinner />}
            <div class="row mb-2">
              <div class="col-sm-8">
                <span class="">
                  <button
                    type="button"
                    class="btn btn-success waves-effect waves-light"
                    onClick={link}
                  >
                    <i class="mdi mdi-plus me-1"></i> Create New
                  </button>
                </span>
              </div>
              <div class="col-sm-4">
                <div class="text-sm-end ">
                  <div class="position-relative">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Search Inventory Products..."
                      value={searchTerm}
                      onChange={searchHandler}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div class="table-responsive">
              <table class="table align-middle table-nowrap">
                <thead class="table-light">
                  <tr>
                    <th class="align-middle">Product Name</th>
                    <th class="align-middle">Batch Number</th>
                    <th class="align-middle">Quantity</th>
                    <th class="align-middle">Supplier</th>
                    <th class="align-middle">Purchased Date</th>
                    <th class="align-middle">Approved By</th>
                    <th class="align-middle">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {search === 0
                    ? currentPost.length > 0
                      ? currentPost.map((prod) => (
                          <tr>
                            <td>{prod.productname}</td>
                            <td>{prod.batchNo}</td>
                            <td>{prod.quantity}</td>
                            <td>{prod.supplier}</td>
                            <td>{moment(prod.purchaseddate).format("MM/DD/YYYY")}</td>
                            <td>{prod.user}</td>
                            <td>
                              <div class="d-flex gap-3">
                                <Link
                                  to={`/editasset/${prod._id}`}
                                  class="text-success"
                                >
                                  <i class="bx bx-edit font-size-18"></i>
                                </Link>
                                <a
                                  href="javascript:void(0);"
                                  class="text-danger"
                                  onClick={() => deleteAsset(prod._id)}
                                >
                                  <i class="bx bxs-trash font-size-18"></i>
                                </a>
                              </div>
                            </td>
                          </tr>
                        ))
                      : "No Inventory Products Yet"
                    : currentPost.length > 0
                    ? currentPost.map((prod) => (
                        <tr>
                          <td>{prod.serialNo}</td>
                          <td>{prod.engravedNo}</td>
                          <td>{prod.assetType && prod.assetType.name}</td>
                          <td>{prod.status}</td>
                          <td>{prod.model && prod.model.name}</td>
                          <td>{prod.user}</td>
                          <td>{truncate(prod.department)}</td>
                          <td>{truncate(prod.division)}</td>
                          <td>{prod.section}</td>
                          <td>{prod.officeNo}</td>
                          {/* <td>{moment(prod.createdAt).format("MM/DD/YYYY")}</td> */}
                          <td>
                            <div class="d-flex gap-3">
                              <Link
                                to={`/editasset/${prod._id}`}
                                class="text-success"
                              >
                                <i class="bx bx-edit font-size-18"></i>
                              </Link>
                              <a href="javascript:void(0);" class="text-danger">
                                <i class="bx bxs-trash font-size-18"></i>
                              </a>
                            </div>
                          </td>
                        </tr>
                      ))
                    : "No Search Results matched your creatria"}
                </tbody>
              </table>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsListing;
