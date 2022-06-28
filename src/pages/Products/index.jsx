import React, { useState, useEffect } from "react";
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import { useHistory } from "react-router-dom";
import API from "../../helpers/api";
import ProductListing from "./ProductListing";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const history = useHistory();
  const productlink = () => history.push(`/addproduct`);

  const loadProducts = async () => {
    setLoading(true);
    try {
      const res = await API.get("/products");
      console.log("Products Fetch Backend ===>", res);
      setProducts(res.data);
      setLoading(false);
    } catch (error) {
      console.log("error", error);
      setLoading(false);
    }
  };

  const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  const fileExtension = '.xlsx';

  const exportToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(products);
    const wb = { Sheets: { 'Products Inventory': ws }, SheetNames: ['Products Inventory'] };
    const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], {type: fileType});
    const fileName = "Products Inventory"
    FileSaver.saveAs(data, fileName + fileExtension);
}

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <>
      <div class="row">
        <div class="col-12">
          <div class="page-title-box d-sm-flex align-items-center justify-content-between">
            <h4 class="mb-sm-0 font-size-18">Products Inventory Listing</h4>

            <div class="page-title-right">
              <span class="">
                <button
                  type="button"
                  class="btn btn-success waves-effect waves-light "
                  onClick={exportToExcel}
                >
                  <i class="mdi mdi-plus me-1"></i> Download
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>

      <ProductListing
        title="Add Product"
        link={productlink}
        loading={loading}
        products={products}
        loadproducts={loadProducts}
      />
    </>
  );
};

export default Products;
