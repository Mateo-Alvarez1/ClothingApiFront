import Docs from "../Docs";
import CreateUser from "./createUser/CreateUser";
import ExistingUser from "./existingUser/ExistingUser";
import SearchUser from "./searchUser/SearchUser";

const Auth = () => {
  return (
    <div className="productContainer">
      <Docs />
      <div className="responseContainer product">
        <CreateUser />
        <ExistingUser />
        <SearchUser />
      </div>
    </div>
  );
};

export default Auth;
