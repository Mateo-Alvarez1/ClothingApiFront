import puzzle from "../../assets/puzzle.png";
import { FaArrowRight } from "react-icons/fa";
import "./about.css";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const onHandleButton = () => {
    navigate("/docs/introduction");
  };

  return (
    <div id="aboutContainer">
      <div className="aboutData">
        <h1>ClothingAPI</h1>
        <p>The perfect API for the rapid development of your virtual store.</p>
        <button onClick={onHandleButton}>
          Docs <FaArrowRight className="icon" />
        </button>
      </div>
      <img src={puzzle} alt="puzzle" />
    </div>
  );
};

export default About;
