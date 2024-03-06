import Docs from "../Docs";
import "./introduction.css";
import { FaRegCircle } from "react-icons/fa6";

const Introduction = () => {
  return (
    <div id="docs">
      <Docs />
      <div className="responseContainer introductionContainer">
        <h1>Introduction</h1>
        <p>
          ClothingAPI is a robust API designed specifically for e-commerce
          companies, mobile applications and websites that want to access an
          extensive catalog of fashion products. This API provides a wide range
          of functionalities to obtain detailed information about clothing and
          fashion accessories from different brands and categories.
        </p>
        <h2>Target Audience</h2>
        <p>
          This API is targeted at mobile app developers, e-commerce companies,
          fashion designers and anyone interested in integrating a fashion
          catalog into their apps and online platforms.{" "}
        </p>
        <h2>Features</h2>
        <ul>
          <li>
            <FaRegCircle
              style={{
                color: "green",
                paddingRight: "10px",
                fontSize: "25px",
                paddingTop: "10px",
                background: "#23262f",
              }}
            />
            All CRUD Operations
          </li>
          <li>
            <FaRegCircle
              style={{
                color: "green",
                paddingRight: "10px",
                fontSize: "25px",
                paddingTop: "10px",
                background: "#23262f",
              }}
            />
            REST API
          </li>
          <li>
            <FaRegCircle
              style={{
                color: "green",
                paddingRight: "10px",
                fontSize: "25px",
                paddingTop: "10px",
                background: "#23262f",
              }}
            />
            Auth Whit JWT
          </li>
          <li>
            <FaRegCircle
              style={{
                color: "green",
                paddingRight: "10px",
                fontSize: "25px",
                paddingTop: "10px",
                background: "#23262f",
              }}
            />
            Pagination
          </li>
          <li>
            <FaRegCircle
              style={{
                color: "green",
                paddingRight: "10px",
                fontSize: "25px",
                paddingTop: "10px",
                background: "#23262f",
              }}
            />
            Filter Products
          </li>
          <li>
            <FaRegCircle
              style={{
                color: "green",
                paddingRight: "10px",
                fontSize: "25px",
                paddingTop: "10px",
                background: "#23262f",
              }}
            />
            Create Users and check if they already exist
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Introduction;
