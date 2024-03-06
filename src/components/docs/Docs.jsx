import { GoHorizontalRule } from "react-icons/go";
import { NavLink } from "react-router-dom";
import "./docs.css";
const Docs = () => {
  return (
    <>
      <div id="docs">
        <div className="sidebarContainer">
          <h2>About</h2>
          <NavLink
            className={({ isActive }) =>
              `navlink ${isActive ? "link_color" : ""}`
            }
            to="/docs/introduction"
          >
            <i>
              <GoHorizontalRule style={{ backgroundColor: "#23262f" }} />
            </i>
            <p>Introduction</p>
          </NavLink>
          <h2>Api Request</h2>
          <NavLink to="/docs/product" className="navlink">
            <i>
              <GoHorizontalRule style={{ backgroundColor: "#23262f" }} />
            </i>
            <p>Product</p>
          </NavLink>
          <NavLink to="/docs/categories" className="navlink">
            <i>
              <GoHorizontalRule style={{ backgroundColor: "#23262f" }} />
            </i>
            <p>Categories</p>
          </NavLink>
          <NavLink to="/docs/auth" className="navlink">
            <i>
              <GoHorizontalRule style={{ backgroundColor: "#23262f" }} />
            </i>
            <p>Auth JWT</p>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Docs;
