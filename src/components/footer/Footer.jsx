import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./footer.css";
const Footer = () => {
  return (
    <div id="footerContainer">
      <p>Mateo Alvarez</p>
      <h2>ClothingAPI</h2>
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

export default Footer;
