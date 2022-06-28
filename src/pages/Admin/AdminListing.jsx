import React from "react";
import { Link } from "react-router-dom";
import LoadSpinner from "../../components/Spinner";

const AdminListing = ({ users, loading, link }) => {
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
                    <i class="mdi mdi-plus me-1"></i> New User
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
                    <th class="">Username</th>
                    <th class="">First Name</th>
                    <th class="">Last Name</th>
                    <th class="">Role</th>
                    <th class="">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.length > 0
                    ? users.map((user) => (
                        <tr>
                          <td>{user.username}</td>
                          <td>{user.firstname}</td>
                          <td>{user.lastname}</td>
                          <td>{user.role}</td>
                          <td>
                            <div class="d-flex gap-3">
                              <Link
                                to={`/updateproduct/${user._id}`}
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
                    : "No Admin Users Added Yet !!"}
                </tbody>
              </table>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminListing;
