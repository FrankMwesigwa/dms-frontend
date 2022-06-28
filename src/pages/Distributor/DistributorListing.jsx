import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import LoadSpinner from "../../components/Spinner";

const DistributorListing = ({ distributors, loading, link }) => {
  return (
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            {loading && <LoadSpinner />}
            <div class="row mb-2">
              <div class="col-sm-4">
                <span class="">
                  <button
                    type="button"
                    class="btn btn-success waves-effect waves-light "
                    onClick={link}
                  >
                    <i class="mdi mdi-plus me-1"></i> New Distributor
                  </button>
                </span>
              </div>
              <div class="col-sm-6">
                <div class="text-sm-end ">
                  <div class="position-relative">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Search..."
                    />
                  </div>
                </div>
              </div>
            </div>

            <div class="table-responsive">
              <table class="table table-nowrap">
                <thead class="table-light">
                  <tr>
                    <th class="">Distributor</th>
                    <th class="">Contact</th>
                    <th class="">Region</th>
                    <th class="">Location</th>
                    <th class="">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {distributors.length > 0
                    ? distributors.map((distributor) => (
                        <tr>
                          <td>{distributor.name}</td>
                          <td>{distributor.contact}</td>
                          <td>{distributor.region}</td>
                          <td>{distributor.location}</td>
                          <td>
                            <div class="d-flex gap-3">
                              <Link
                                to={`/updateproduct/${distributor._id}`}
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
                    : "No Distributors Added Yet !!"}
                </tbody>
              </table>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default DistributorListing;
