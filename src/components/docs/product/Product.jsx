import Docs from "../Docs.jsx";
import CreateProduct from "./createProduct/CreateProduct.jsx";
import GetAll from "./getAll/GetAll.jsx";
import GetById from "./getById/GetById.jsx";
import DeleteProduct from "./deleteProduct/DeleteProduct.jsx";
import "./product.css";
import UpdateProduct from "./updateProduct/UpdateProduct.jsx";
const Product = () => {
  return (
    <div className="productContainer">
      <Docs />
      <div className="responseContainer product">
        <GetAll />
        <GetById />
        <CreateProduct />
        <DeleteProduct />
        <UpdateProduct />
      </div>
    </div>
  );
};

export default Product;
