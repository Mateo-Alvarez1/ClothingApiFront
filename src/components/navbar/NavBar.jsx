import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./navbar.css";
import { useNavigate } from "react-router-dom";
const NavBar = () => {
  const navigate = useNavigate();
  const onHandleTitle = () => {
    navigate("/");
  };
  return (
    <div id="navContainer">
      <h1 onClick={onHandleTitle}>ClothingAPI</h1>
      <div className="iconContainer">
        <a href="https://github.com/Mateo-Alvarez1/ClothingApi" target="blank">
          <FaGithub style={{ backgroundColor: "#23262f" }} />
        </a>
        <a href="https://linkedin.com/in/mateoaalvarez" target="blank">
          <FaLinkedin style={{ backgroundColor: "#23262f" }} />
        </a>
      </div>
    </div>
  );
};

export default NavBar;
