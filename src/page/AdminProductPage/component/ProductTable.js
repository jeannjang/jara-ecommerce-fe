import React from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { currencyFormat } from "../../../utils/number";

const ProductTable = ({
  header,
  data,
  deleteItem,
  openEditForm,
  searchQuery,
}) => {
  return (
    <div className="overflow-x scroll-table">
      <Table striped bordered hover>
        <thead>
          <tr>
            {header.map((title, index) => (
              <th key={index}>{title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((item, index) => (
              <tr key={index}>
                <th>{index}</th>
                <th>{item.sku}</th>
                <th style={{ minWidth: "100px" }}>{item.name}</th>
                <th>{currencyFormat(item.price)}</th>
                <th>
                  {Object.keys(item.stock).map((size, index) => (
                    <div key={index}>
                      {size}:{item.stock[size]}
                    </div>
                  ))}
                </th>
                <th>
                  <img src={item.image} width={100} alt="product" />
                </th>
                <th>{item.status}</th>
                <th style={{ minWidth: "100px" }}>
                  <Button
                    size="sm"
                    variant="danger"
                    onClick={() => deleteItem(item._id)}
                    className="mr-1"
                  >
                    -
                  </Button>
                  <Button size="sm" onClick={() => openEditForm(item)}>
                    Edit
                  </Button>
                </th>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={header.length} className="text-center">
                {searchQuery?.name
                  ? `No items found matching "${searchQuery.name}"`
                  : "No products have been added yet"}
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};
export default ProductTable;
