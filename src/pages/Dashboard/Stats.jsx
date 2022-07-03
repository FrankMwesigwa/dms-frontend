import React from "react";
import { Link } from "react-router-dom";
import CurrencyFormat from "react-currency-format";

const Stats = ({ orders, customers, products }) => {
  const sum = orders.reduce(function (a, b) {
    return a + b.totalPrice;
  }, 0);

  return (
    <>
      <div class="row">
        <div class="col-xl-12">
          <div class="row">
            <div class="col-md-3">
              <div class="card mini-stats-wid bg-primary bg-soft">
                <div class="card-body">
                  <div class="d-flex">
                    <div class="flex-grow-1">
                      <p class="text-muted fw-medium">Stock Quantity</p>
                      <h4 class="mb-0">{orders && orders.length}</h4>
                    </div>
                    <div class="flex-shrink-0 align-self-center">
                      <div class="mini-stat-icon avatar-sm rounded-circle bg-primary">
                        <span class="avatar-title">
                          <i class="bx bx-copy-alt font-size-24"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="card mini-stats-wid">
                <div class="card-body">
                  <div class="d-flex">
                    <div class="flex-grow-1">
                      <p class="text-muted fw-medium">Stock Value</p>
                      <h4 class="mb-0">
                        {sum && (
                          <CurrencyFormat
                            value={sum}
                            displayType="text"
                            thousandSeparator
                          />
                        )}
                      </h4>
                    </div>
                    <div class="flex-shrink-0 align-self-center ">
                      <div class="avatar-sm rounded-circle bg-primary mini-stat-icon">
                        <span class="avatar-title rounded-circle bg-primary">
                          <i class="bx bx-archive-in font-size-24"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="card mini-stats-wid bg-success bg-soft">
                <div class="card-body">
                  <div class="d-flex">
                    <div class="flex-grow-1">
                      <p class="text-muted fw-medium">Total Sales</p>
                      <h4 class="mb-0">{customers && customers.length}</h4>
                    </div>
                    <div class="flex-shrink-0 align-self-center">
                      <div class="avatar-sm rounded-circle bg-primary mini-stat-icon">
                        <span class="avatar-title rounded-circle bg-primary">
                          <i class="bx bx-purchase-tag-alt font-size-24"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="card mini-stats-wid">
                <div class="card-body">
                  <div class="d-flex">
                    <div class="flex-grow-1">
                      <p class="text-muted fw-medium">Distributors</p>
                      <h4 class="mb-0">{customers && customers.length}</h4>
                    </div>
                    <div class="flex-shrink-0 align-self-center">
                      <div class="avatar-sm rounded-circle bg-primary mini-stat-icon">
                        <span class="avatar-title rounded-circle bg-primary">
                          <i class="bx bx-purchase-tag-alt font-size-24"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div class="row">
        <div class="col-xl-12">
          <div class="row">
            <div class="col-md-3">
              <div class="card mini-stats-wid bg-primary bg-soft">
                <div class="card-body">
                  <div class="d-flex">
                    <div class="flex-grow-1">
                      <p class="text-muted fw-medium">Agents</p>
                      <h4 class="mb-0">{orders && orders.length}</h4>
                    </div>
                    <div class="flex-shrink-0 align-self-center">
                      <div class="mini-stat-icon avatar-sm rounded-circle bg-primary">
                        <span class="avatar-title">
                          <i class="bx bx-copy-alt font-size-24"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="card mini-stats-wid">
                <div class="card-body">
                  <div class="d-flex">
                    <div class="flex-grow-1">
                      <p class="text-muted fw-medium">Distributor Locations</p>
                      <h4 class="mb-0">
                        {sum && (
                          <CurrencyFormat
                            value={sum}
                            displayType="text"
                            thousandSeparator
                          />
                        )}
                      </h4>
                    </div>
                    <div class="flex-shrink-0 align-self-center ">
                      <div class="avatar-sm rounded-circle bg-primary mini-stat-icon">
                        <span class="avatar-title rounded-circle bg-primary">
                          <i class="bx bx-archive-in font-size-24"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="card mini-stats-wid bg-success bg-soft">
                <div class="card-body">
                  <div class="d-flex">
                    <div class="flex-grow-1">
                      <p class="text-muted fw-medium">Agent Locations</p>
                      <h4 class="mb-0">{customers && customers.length}</h4>
                    </div>
                    <div class="flex-shrink-0 align-self-center">
                      <div class="avatar-sm rounded-circle bg-primary mini-stat-icon">
                        <span class="avatar-title rounded-circle bg-primary">
                          <i class="bx bx-purchase-tag-alt font-size-24"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="card mini-stats-wid">
                <div class="card-body">
                  <div class="d-flex">
                    <div class="flex-grow-1">
                      <p class="text-muted fw-medium">Total Switchs</p>
                      <h4 class="mb-0">{customers && customers.length}</h4>
                    </div>
                    <div class="flex-shrink-0 align-self-center">
                      <div class="avatar-sm rounded-circle bg-primary mini-stat-icon">
                        <span class="avatar-title rounded-circle bg-primary">
                          <i class="bx bx-purchase-tag-alt font-size-24"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Stats;
