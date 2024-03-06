import Docs from "../Docs";
import GetAll from "./getAll/GetAll";
import GetById from "./getById/GetById";
import CreateCategory from "./createCategory/CreateCategory";
import DeleteCategory from "./deleteCategory/DeleteCategory";
import UpdateCategory from "./updateCategory/UpdateCategory";

const Categories = () => {
  return (
    <div className="productContainer">
      <Docs />
      <div className="responseContainer product">
        <GetAll />
        <GetById />
        <CreateCategory />
        <DeleteCategory />
        <UpdateCategory />
      </div>
    </div>
  );
};

export default Categories;
