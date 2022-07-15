import React from "react";
import { Link } from "react-router-dom";

const Reports = () => {
  return (
    <div class="row">
      <div class="col-xl-4 col-sm-6">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-lg-4">
                <div class="text-lg-center">
                  <div class="avatar-sm me-3 mx-lg-auto mb-3 mt-1 float-start float-lg-none">
                    <span class="avatar-title rounded-circle bg-primary bg-soft text-primary font-size-16">
                      M
                    </span>
                  </div>
                </div>
              </div>

              <div class="col-lg-8">
                <Link to="/admin/reports/dist/stock" class="waves-effect">
                  <h5 class="">Distributor Stock Report</h5>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-4 col-sm-6">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-lg-4">
                <div class="text-lg-center">
                  <div class="avatar-sm me-3 mx-lg-auto mb-3 mt-1 float-start float-lg-none">
                    <span class="avatar-title rounded-circle bg-primary bg-soft text-primary font-size-16">
                      M
                    </span>
                  </div>
                </div>
              </div>

              <div class="col-lg-8">
                <Link to="/admin/reports/dist/sales">
                  <h5 class="">Distributor Sales Report</h5>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-4 col-sm-6">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-lg-4">
                <div class="text-lg-center">
                  <div class="avatar-sm me-3 mx-lg-auto mb-3 mt-1 float-start float-lg-none">
                    <span class="avatar-title rounded-circle bg-primary bg-soft text-primary font-size-16">
                      M
                    </span>
                  </div>
                </div>
              </div>

              <div class="col-lg-8">
                <Link to="/admin/dist/orders">
                  <h5 class="">Distributor Orders Report</h5>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
