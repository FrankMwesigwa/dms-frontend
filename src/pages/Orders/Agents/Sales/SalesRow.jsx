import React, { useState } from "react";
import CurrencyFormat from "react-currency-format";

const SalesRow = ({ p }) => {
  const [sale, setSale] = useState();

  const addSale = (data) => {
    var existingSales = JSON.parse(localStorage.getItem("allSales"));
    if (existingSales == null) existingSales = [];

    localStorage.setItem("sale", JSON.stringify(data));
    existingSales.push(data);
    localStorage.setItem("allSales", JSON.stringify(existingSales));

    console.log("All Sales ===>", existingSales);
  };

  return (
    <>
      <tr>
        <td>
          <h5 class="font-size-14 text-truncate">
            <a href="ecommerce-product-detail.html" class="text-dark">
              {p.name}
            </a>
          </h5>
        </td>
        <td>
          {p.amount && (
            <CurrencyFormat
              value={p.amount}
              displayType="text"
              thousandSeparator
            />
          )}
        </td>
        <td>{p.count}</td>
        <td>
          <div class="me-3" style={{ width: "120px" }}>
            <div class="input-group">
              <input
                type="text"
                value={sale}
                name="sale"
                class="form-control"
                onChange={(e) => setSale(e.target.value)}
              />
            </div>
          </div>
        </td>
        <td>
          <CurrencyFormat
            value={p.amount * sale}
            displayType="text"
            thousandSeparator
          />
        </td>
        <td>
          <button
            type="button"
            class="btn btn-success waves-effect waves-light "
            onClick={() =>
              addSale({
                product: p.product,
                name: p.name,
                amount: p.amount,
                count: p.count,
                sale: sale,
                salePrice: p.amount * sale
              })
            }
          >
            <i class="mdi mdi-plus me-1"></i> Sale Entry
          </button>
        </td>
      </tr>
    </>
  );
};

export default SalesRow;
