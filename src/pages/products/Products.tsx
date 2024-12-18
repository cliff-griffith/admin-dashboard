import { GridColDef } from "@mui/x-data-grid";
import Add from "../../components/add/Add";
import DataTable from "../../components/dataTable/DataTable";
import "./products.scss";
import { products } from "../../data";
import { useState } from "react";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "img",
    headerName: "Image",
    width: 150,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="product" />;
    },
  },
  {
    field: "title",
    headerName: "Title",
    type: "string",
    width: 250,
  },
  {
    field: "color",
    headerName: "Color",
    width: 150,
    type: "string",
  },
  {
    field: "price",
    headerName: "Price",
    type: "number",
    width: 110,
  },
  {
    field: "producer",
    headerName: "Producer",
    width: 150,
    type: "string",
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 150,
    type: "string",
  },
  {
    field: "inStock",
    headerName: "In Stock",
    width: 150,
    type: "boolean",
  },
];

const Products = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="products">
      <div className="info">
        <h1>Products</h1>
        <button onClick={() => setOpen(true)}>Add New Products</button>
      </div>
      <DataTable slug="products" columns={columns} rows={products} />
      {open && <Add slug="product" columns={columns} setOpen={setOpen} />}
    </div>
  );
};

export default Products;
