import React from "react";
import { Link } from "react-router-dom";
import Product from "../../../components/Cards/ProductCard";

const ProductsListing = ({ products }) => {
  return (
    <div class="row mt-3">
      <div class="col-lg-12">
        <div>
          <h5 class="mb-3">Products Listing:</h5>
          <div class="col-sm-4">
            <Link to="/dist/order/cart">
              <button
                type="button"
                class="btn btn-success waves-effect waves-light "
              >
                <i class="mdi mdi-plus me-1"></i> Go To Order Cart
              </button>
            </Link>
          </div>

          <div class="row">
            {products.length > 0
              ? products.map((item) => <Product product={item} />)
              : "No Products Placed Yet !!"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsListing;
