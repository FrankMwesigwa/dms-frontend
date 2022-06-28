import React from "react";

const Charts = () => {
  return (
    <div class="col-lg-12 col-xl-8">
      <div class="row">
        <div class="col-lg-12">
          <div class="card m-b-30">
            <div class="card-header">
              <div class="row align-items-center">
                <div class="col-9">
                  <h5 class="card-title mb-0">Quick Summary</h5>
                </div>
                <div class="col-3">
                  <div class="dropdown">
                    <button
                      class="btn btn-link l-h-20 p-0 font-18 float-right"
                      type="button"
                      id="widgetSummary"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i class="feather icon-more-horizontal-"></i>
                    </button>
                    <div
                      class="dropdown-menu dropdown-menu-right"
                      aria-labelledby="widgetSummary"
                    >
                      <a class="dropdown-item font-13" href="#">
                        Refresh
                      </a>
                      <a class="dropdown-item font-13" href="#">
                        Export
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-body py-0">
              <div class="row align-items-center">
                <div class="col-lg-3">
                  <div class="revenue-box border-bottom mb-2">
                    <h4>$1598</h4>
                    <p>
                      Total Earning <a href="#">Withdraw</a>
                    </p>
                  </div>
                  <div class="revenue-box">
                    <h4>$1285</h4>
                    <p>
                      To be Paid <a href="#">Pay</a>
                    </p>
                  </div>
                </div>
                <div class="col-lg-9">
                  <div id="apex-stacked-bar-chart"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-6">
          <div class="card m-b-30">
            <div class="card-header">
              <div class="row align-items-center">
                <div class="col-9">
                  <h5 class="card-title mb-0">Storage</h5>
                </div>
                <div class="col-3">
                  <div class="dropdown">
                    <button
                      class="btn btn-link l-h-20 p-0 font-18 float-right"
                      type="button"
                      id="widgetStorage"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i class="feather icon-more-horizontal-"></i>
                    </button>
                    <div
                      class="dropdown-menu dropdown-menu-right"
                      aria-labelledby="widgetStorage"
                    >
                      <a class="dropdown-item font-13" href="#">
                        Refresh
                      </a>
                      <a class="dropdown-item font-13" href="#">
                        Export
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-body">
              <div class="row align-items-center">
                <div class="col-lg-6 col-xl-7">
                  <p>
                    <i class="feather icon-arrow-up text-primary mr-1"></i>Used:{" "}
                    <strong>17.2 GB</strong>
                  </p>
                  <p>
                    <i class="feather icon-arrow-down mr-1"></i>Free:{" "}
                    <strong>7.8 GB</strong>
                  </p>
                </div>
                <div class="col-lg-6 col-xl-5 text-center">
                  <img
                    src="assets/images/ecommerce/storage.png"
                    class="img-fluid"
                    alt="storage"
                  />
                  <p class="storage-num">25 GB</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-6">
          <div class="card m-b-30">
            <div class="card-header">
              <h5 class="card-title mb-0">Best Selling Product</h5>
            </div>
            <div class="card-body">
              <div class="best-product-slider">
                <div class="best-product-slider-item">
                  <div class="row">
                    <div class="col-4">
                      <img
                        src="assets/images/ecommerce/produc_slider_01.png"
                        class="img-fluid"
                        alt="product"
                      />
                    </div>
                    <div class="col-8">
                      <span class="font-12 text-uppercase">Sports</span>
                      <h5 class="mt-2 mb-4 font-16">Black Shoes</h5>
                      <ul class="list-inline mb-0">
                        <li class="list-inline-item pr-2 border-right">
                          <h4 class="mb-0">205</h4>
                          <p class="mb-0">Sold</p>
                        </li>
                        <li class="list-inline-item">
                          <h4 class="mb-0">52</h4>
                          <p class="mb-0">In Stock</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="best-product-slider-item">
                  <div class="row">
                    <div class="col-4">
                      <img
                        src="assets/images/ecommerce/produc_slider_02.png"
                        class="img-fluid"
                        alt="product"
                      />
                    </div>
                    <div class="col-8">
                      <span class="font-12 text-uppercase">Fashion</span>
                      <h5 class="mt-2 mb-4 font-16">Red Lipstic</h5>
                      <ul class="list-inline mb-0">
                        <li class="list-inline-item pr-3 border-right">
                          <h4 class="mb-0">121</h4>
                          <p class="mb-0">Sold</p>
                        </li>
                        <li class="list-inline-item">
                          <h4 class="mb-0">35</h4>
                          <p class="mb-0">In Stock</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="best-product-slider-item">
                  <div class="row">
                    <div class="col-4">
                      <img
                        src="assets/images/ecommerce/produc_slider_03.png"
                        class="img-fluid"
                        alt="product"
                      />
                    </div>
                    <div class="col-8">
                      <span class="font-12 text-uppercase">New</span>
                      <h5 class="mt-2 mb-4 font-16">Hyper Car</h5>
                      <ul class="list-inline mb-0">
                        <li class="list-inline-item pr-3 border-right">
                          <h4 class="mb-0">55</h4>
                          <p class="mb-0">Sold</p>
                        </li>
                        <li class="list-inline-item">
                          <h4 class="mb-0">31</h4>
                          <p class="mb-0">In Stock</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Charts;
