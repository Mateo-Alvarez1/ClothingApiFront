import About from "../about/About";
import "./home.css";
const Home = () => {
  return (
    <>
      <About />
      <div id="homeContainer">
        <div>
          <h2>Get Products</h2>
          <p>https://clothingapi-dev-aepd.3.us-1.fl0.io/product/getAll</p>
        </div>
        <div>
          <h2>Get Products By Id</h2>
          <p>https://clothingapi-dev-aepd.3.us-1.fl0.io/product/1</p>
        </div>
        <div>
          <h2>Post Products</h2>
          <p>https://clothingapi-dev-aepd.3.us-1.fl0.io/product</p>
        </div>
        <div>
          <h2>Delete Products</h2>
          <p>https://clothingapi-dev-aepd.3.us-1.fl0.io/product/1</p>
        </div>
        <div>
          <h2>Update Products</h2>
          <p>https://clothingapi-dev-aepd.3.us-1.fl0.io/product/1</p>
        </div>
      </div>
    </>
  );
};

export default Home;
