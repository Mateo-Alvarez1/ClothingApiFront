import { Route, Routes } from "react-router-dom";
import Docs from "../docs/Docs.jsx";
import NavBar from "../navbar/NavBar.jsx";
import Home from "../home/Home.jsx";
import Footer from "../footer/Footer.jsx";
import Product from "../docs/product/Product.jsx";
import Introduction from "../docs/introduction/Introduction.jsx";
import Categories from "../docs/categories/Categories.jsx";
import Auth from "../docs/auth/Auth.jsx";
const Router = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/docs/*" element={<Docs />} />
        <Route path="/docs/introduction" element={<Introduction />} />
        <Route path="/docs/product" element={<Product />} />
        <Route path="/docs/categories" element={<Categories />} />
        <Route path="/docs/auth" element={<Auth />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default Router;
